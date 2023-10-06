import React, { useState } from "react";
import "./tasklist.css";
import PropTypes from "prop-types";
import TaskItem from "../TaskItem/TaskItem";

export default function TaskList({
  title,
  tasks,
  addNewTask,
  filterStatus,
  taskUpdate,
}) {
  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        <div>
          <h3>Lista de Tarefas</h3>
          <ul>
            {tasks.map((task) =>
              filterStatus == task.status ? (
                <TaskItem
                  key={task.id}
                  title={task.title}
                  id={task.id}
                  newStatus={task.status}
                  taskUpdate={taskUpdate}
                />
              ) : (
                ""
              )
            )}
          </ul>
        </div>
        <button
          onClick={(e) => {
            addNewTask(filterStatus);
          }}
        >
          Adicionar tarefa
        </button>
      </div>
    </div>
  );
}

TaskList.propTypes = {
  title: PropTypes.string.isRequired,
  tasks: PropTypes.array.isRequired,
  addNewTask: PropTypes.func.isRequired,
  filterStatus: PropTypes.string.isRequired,
  taskUpdate: PropTypes.func.isRequired,
};
