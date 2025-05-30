import React from 'react';

const Widget = () => {
  return (
    <div
      style={{
        padding: '1rem',
        backgroundColor: '#f9f9f9',
        border: '1px solid #ccc',
      }}
    >
      <h2>📊 Dashboard Widget</h2>
      <p>Este componente está sendo exposto via Module Federation.</p>
    </div>
  );
};

export default Widget;
