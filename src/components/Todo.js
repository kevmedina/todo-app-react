import React from "react";

const Todo = ({ todo, deleteTodo }) => {
  const handleRemoveClick = () => {
    deleteTodo(todo.id);
  };

  return (
    <div className="todo">
      <span>{todo.task}</span>
      <i className="fa fa-trash" onClick={handleRemoveClick}></i>
    </div>
  );
};

export default Todo;
