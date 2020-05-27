import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const AddTodo = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  const handleInput = ({ target: { value } }) => {
    setTodo({
      ...todo,
      task: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuid() });
      setTodo({ ...todo, task: "" });
    }
  };

  return (
    <div className="add-todo">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add new todo"
          value={todo.task}
          onChange={handleInput}
        ></input>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
