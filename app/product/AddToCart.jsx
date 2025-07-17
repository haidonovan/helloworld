
// use client code to make this component as use for client in your first line of your file

// "use client"

// import { useState } from "react";

// export default function AddToCart({ product }) {
//     const [added, setAdded] = useState(false);

//     const handleAddToCart = () => {
//         // Logic to add product to cart
//         setAdded(true);
//         console.log(`Product ${productId} added to cart`);
//     };

//     return (
//         <button onClick={handle}>
//             {added ? "Added to Cart": "Add to Cart"}
//         </button>
//     )
// }

// app/product/AddToCart.jsx
'use client';
import { useState } from 'react';

export default function AddToCart({ product, quantity }) {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    const cartItem = {
      ...product,
      quantity,
    };

    console.log('✅ Added to cart:', cartItem);

    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <button
      onClick={handleAddToCart}
      style={{
        padding: '10px 20px',
        background: added ? '#00b300' : '#0070f3',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        marginTop: '10px',
        cursor: 'pointer',
        transition: 'background 0.3s',
      }}
    >
      {added ? '✔ Added!' : 'Add to Cart'}
    </button>
  );
}
