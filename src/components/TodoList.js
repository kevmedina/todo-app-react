import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      {console.log(todos)}
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} />;
      })}
    </div>
  );
};

export default TodoList;
