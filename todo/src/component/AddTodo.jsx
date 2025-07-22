import React, { useState } from 'react';

const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 16 }}>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add a new task"
        style={{ width: '70%', padding: 8 }}
      />
      <button type="submit" style={{ padding: 8, marginLeft: 8 }}>Add</button>
    </form>
  );
};

export default AddTodo; 