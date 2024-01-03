// App.js
import React, { useState, useEffect } from "react";
import AddTodo from "./components/AddTodo";
import EditTodo from "./components/EditTodo";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);

  useEffect(() => {
    // Load tasks from local storage on component mount
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    // Save tasks to local storage whenever todos change
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (todo) => {
    setEditing(true);
    setCurrentTodo(todo);
  };

  const updateTodo = (updatedTodo) => {
    setTodos(
      todos.map((todo) =>
        todo.id === updatedTodo.id ? { ...todo, task: updatedTodo.task } : todo
      )
    );
    setEditing(false);
    setCurrentTodo(null);
  };

  return (
    <div>
      <h1>To do List App</h1>
      {editing ? (
        <EditTodo
          todo={currentTodo}
          editTodo={updateTodo}
          setEditing={setEditing}
        />
      ) : (
        <AddTodo addTodo={addTodo} />
      )}
      <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
    </div>
  );
};

export default App;
