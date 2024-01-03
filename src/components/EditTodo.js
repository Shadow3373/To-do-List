// EditTodo.js
import React, { useState, useEffect } from "react";

const EditTodo = ({ todo, editTodo, setEditing }) => {
  const [editedTask, setEditedTask] = useState("");

  useEffect(() => {
    setEditedTask(todo.task);
  }, [todo]);

  const handleEdit = () => {
    if (editedTask.trim()) {
      editTodo({ ...todo, task: editedTask.trim() });
      setEditing(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={editedTask}
        onChange={(e) => setEditedTask(e.target.value)}
      />
      <button onClick={handleEdit}>Save</button>
      <button onClick={() => setEditing(false)}>Cancel</button>
    </div>
  );
};

export default EditTodo;
