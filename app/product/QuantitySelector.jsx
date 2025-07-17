// app/product/QuantitySelector.jsx
'use client';

export default function QuantitySelector({ quantity, setQuantity }) {
  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => setQuantity(prev => Math.max(1, prev - 1));

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '10px 0' }}>
      <button
        onClick={decrement}
        style={{
          padding: '5px 12px',
          fontSize: '16px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          background: '#f0f0f0',
          cursor: 'pointer',
        }}
      >
        -
      </button>
      <span style={{ fontSize: '16px', fontWeight: 'bold' }}>{quantity}</span>
      <button
        onClick={increment}
        style={{
          padding: '5px 12px',
          fontSize: '16px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          background: '#f0f0f0',
          cursor: 'pointer',
        }}
      >
        +
      </button>
    </div>
  );
}
