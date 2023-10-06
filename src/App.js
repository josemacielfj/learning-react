import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import TaskList from "./components/TaskList/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [idAcc, setIdAcc] = useState(0);

  function generateId() {
    setIdAcc(idAcc + 1);
    return idAcc;
  }

  function addTask(newStatus) {
    const newTask = {
      id: generateId(),
      title: "Nova Tarefa",
      status: newStatus,
    };
    setTasks((existingTasks) => {
      return [...existingTasks, newTask];
    });
  }

  function taskUpdate(id, newTitle, newStatus) {
    setTasks((existingTasks) => {
      let newTasks = [];
      return existingTasks.map((e) => {
        if (e.id === id)
          return { id: e.id, title: newTitle, status: newStatus };
        else return e;
      });
    });
  }

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TaskList
          title="Pendente"
          addNewTask={addTask}
          tasks={tasks}
          filterStatus="Pendente"
          taskUpdate={taskUpdate}
        />
        <TaskList
          title="Fazendo"
          addNewTask={addTask}
          tasks={tasks}
          filterStatus="Fazendo"
          taskUpdate={taskUpdate}
        />
        <TaskList
          title="Completo"
          addNewTask={addTask}
          tasks={tasks}
          filterStatus="Completo"
          taskUpdate={taskUpdate}
        />
      </div>
    </div>
  );
}

export default App;
