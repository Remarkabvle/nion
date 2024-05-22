import React, { useState, useMemo, useCallback } from 'react';
import './todolist.css';

function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('normal');
  const [todos, setTodos] = useState([]);

  const handleTitleChange = useCallback((e) => {
    setTitle(e.target.value);
  }, []);

  const handleDescriptionChange = useCallback((e) => {
    setDescription(e.target.value);
  }, []);

  const handlePriorityChange = useCallback((e) => {
    setPriority(e.target.value);
  }, []);

  const handleCreate = useCallback(() => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { title, description, priority, id: Date.now() },
    ]);
    setTitle('');
    setDescription('');
    setPriority('normal');
  }, [title, description, priority]);

  const isCreateDisabled = useMemo(() => {
    return title.trim() === '' || description.trim() === '';
  }, [title, description]);

  const todoCards = useMemo(() => {
    return todos.map((todo) => (
      <div key={todo.id} className="todo-card">
        <h3>{todo.title}</h3>
        <p>{todo.description}</p>
        <p>Priority: {todo.priority}</p>
      </div>
    ));
  }, [todos]);

  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <div className="todo-form">
        <input
          className="todo-data"
          type="text"
          placeholder="Is it data"
          value={title}
          onChange={handleTitleChange}
        />
        <input
          className="todo-person"
          type="text"
          placeholder="Person"
          value={description}
          onChange={handleDescriptionChange}
        />
        <select value={priority} onChange={handlePriorityChange}>
          <option value="low">important</option>
          <option value="normal">Normal</option>
          <option value="high">average</option>
        </select>
        <button onClick={handleCreate} disabled={isCreateDisabled}>Create</button>
      </div>
      <div className='wrapper'>
        {todoCards}
      </div>
    </div>
  );
}

export default App;
