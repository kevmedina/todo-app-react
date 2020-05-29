import React from "react";

const Todo = ({ todo, deleteTodo, completeTodo }) => {
  const handleRemoveClick = () => {
    deleteTodo(todo.id);
  };

  const handleCompleted = () => {
    completeTodo(todo.id);
  };

  return (
    <div className="todo">
      <span className={`${todo.completed ? "completed" : ""}`}>{todo.task}</span>
      <input type="checkbox" onClick={handleCompleted} />
      <i className="fa fa-trash" onClick={handleRemoveClick}></i>
    </div>
  );
};

export default Todo;
