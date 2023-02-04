import React from "react";
import "./TodoCounter.css";

function TodoCounter({ completedTodos, totalTodos, loading }) {
  return (
    <React.Fragment>
      <h1 className="TodoCounter">Todo App</h1>
      <h2
        className={`TodoCounter-h2 ${!!loading && "TodoCounter-h2--loading"}`}
      >
        Today's Goal{" "}
        <span>
          {completedTodos} of {totalTodos}
        </span>
      </h2>
    </React.Fragment>
  );
}

export { TodoCounter };
