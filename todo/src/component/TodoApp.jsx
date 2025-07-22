import React, { useState, useEffect } from 'react';
import AddTodo from './AddTodo';
import Filter from './Filter';
import TodoList from './TodoList';

const FILTERS = {
  ALL: 'all',
  COMPLETED: 'completed',
  PENDING: 'pending',
};

const getInitialTodos = () => {
  const saved = localStorage.getItem('todos');
  return saved ? JSON.parse(saved) : [];
};

const TodoApp = () => {
  const [todos, setTodos] = useState(getInitialTodos);
  const [filter, setFilter] = useState(FILTERS.ALL);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos([
      ...todos,
      { id: Date.now(), text, completed: false }
    ]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === FILTERS.ALL) return true;
    if (filter === FILTERS.COMPLETED) return todo.completed;
    if (filter === FILTERS.PENDING) return !todo.completed;
    return true;
  });

  return (
    <div style={{ maxWidth: 400, margin: '40px auto', padding: 20, border: '1px solid #ccc', borderRadius: 8 }}>
      <h2>To-Do List</h2>
      <AddTodo onAdd={addTodo} />
      <Filter filter={filter} setFilter={setFilter} />
      <TodoList
        todos={filteredTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
    </div>
  );
};

export default TodoApp; 