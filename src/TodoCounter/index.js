import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  return (
    <h2 className="TodoCounter">
      <span
        style={{
          color: "purple",
          position: "relative",
          left: "-15px",
        }}
      >
        <i class="fa-solid fa-thumbtack"></i>
      </span>
      To do Machine
      <br></br>
      Jordan: Has completado {completedTodos} de {totalTodos} de Tus Tareas
      Pendientes
    </h2>
  );
}

export { TodoCounter };
