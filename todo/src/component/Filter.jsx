import React from 'react';

const Filter = ({ filter, setFilter }) => (
  <div style={{ marginBottom: 16 }}>
    <button
      onClick={() => setFilter('all')}
      style={{ fontWeight: filter === 'all' ? 'bold' : 'normal', marginRight: 8 }}
    >
      All
    </button>
    <button
      onClick={() => setFilter('completed')}
      style={{ fontWeight: filter === 'completed' ? 'bold' : 'normal', marginRight: 8 }}
    >
      Completed
    </button>
    <button
      onClick={() => setFilter('pending')}
      style={{ fontWeight: filter === 'pending' ? 'bold' : 'normal' }}
    >
      Pending
    </button>
  </div>
);

export default Filter; 