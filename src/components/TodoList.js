import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <div className="todo-list">
      <h1>Todo List</h1>

      {todos.length > 0
        ? todos.map((todo) => {
            return <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} />;
          })
        : "You have no todo's on your list"}
    </div>
  );
};

export default TodoList;
