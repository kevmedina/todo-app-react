import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  return (
    <div className="App">
      <h1>React Todo App</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
