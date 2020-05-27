import React from "react";

const Todo = ({ todo }) => {
  return (
    <div className="todo">
      <span>{todo.task}</span>
      <i className="fa fa-trash"></i>
    </div>
  );
};

export default Todo;
