// TodoList.js
import React from "react";

const TodoList = ({ todos, deleteTodo, editTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.task}
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          <button onClick={() => editTodo(todo)}>Edit</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
