import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggle, onDelete }) => (
  <ul style={{ listStyle: 'none', padding: 0 }}>
    {todos.length === 0 && <li>No tasks</li>}
    {todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        onToggle={onToggle}
        onDelete={onDelete}
      />
    ))}
  </ul>
);

export default TodoList; 