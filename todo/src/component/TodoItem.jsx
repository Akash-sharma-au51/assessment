import React from 'react';

const TodoItem = ({ todo, onToggle, onDelete }) => (
  <li
    style={{
      display: 'flex',
      alignItems: 'center',
      marginBottom: 8,
      textDecoration: todo.completed ? 'line-through' : 'none'
    }}
  >
    <span
      onClick={() => onToggle(todo.id)}
      style={{
        flex: 1,
        cursor: 'pointer',
        color: todo.completed ? '#888' : '#222'
      }}
    >
      {todo.text}
    </span>
    <button onClick={() => onDelete(todo.id)} style={{ marginLeft: 8 }}>
      Delete
    </button>
  </li>
);

export default TodoItem; 