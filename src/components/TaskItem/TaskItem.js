import React, { useState } from "react";
import "./TaskItem.css";
import PropTypes from "prop-types";

export default function TaskItem({ id, title, newStatus, taskUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editableText, setEditableText] = useState(title);

  const stopEditing = (e) => {
    if (e.key === "Enter") {
      setIsEditing(false);
      taskUpdate(id, editableText, newStatus);
    }
  };

  const updateStatus = (e) => {
    newStatus = e.target.value;
    taskUpdate(id, editableText, newStatus);
  };

  if (isEditing) {
    return (
      <div>
        <input
          type="text"
          id={id}
          key={id}
          value={editableText}
          onChange={(e) => {
            setEditableText(e.target.value);
          }}
          onKeyDown={(e) => stopEditing(e)}
        />
      </div>
    );
  } else {
    return (
      <div>
        <div id={id} key={id} onClick={(e) => setIsEditing(true)}>
          {editableText}
        </div>
        <select value={newStatus} onChange={updateStatus}>
          <option value="Pendente">Pendente</option>
          <option value="Fazendo">Fazendo</option>
          <option value="Completo">Completo</option>
        </select>
      </div>
    );
  }
}

TaskItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  taskUpdate: PropTypes.func.isRequired,
};
