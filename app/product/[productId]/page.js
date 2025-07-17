// export default async function ProductPage({ params }) {
//     const product = await fetch(`https`)
//     return (
//         <div>
//             <h1>{product.title}</h1>
//             <p>{product.description}</p>
//             <p>{product.prices}</p>
//         </div>
//     )
// }


//  test for fun

// app/product/[productId]/page.js
'use client';
import { useParams } from 'next/navigation';
import QuantitySelector from '../QuantitySelector';
import AddToCart from '../AddToCart';
import { useState } from 'react';

// Dummy product data (in a real app, fetch this)
const dummyProducts = {
  '1': { name: 'Cool Shirt', price: 29.99 },
  '2': { name: 'Nice Hat', price: 15.49 },
};

export default function ProductPage() {
  const { productId } = useParams();
  const product = dummyProducts[productId];

  const [quantity, setQuantity] = useState(1);

  if (!product) return <div>Product not found</div>;

  return (
    <div style={{ padding: 20 }}>
      <h1>{product.name}</h1>
      <p>Price: ${product.price.toFixed(2)}</p>

      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      <AddToCart product={product} quantity={quantity} />
    </div>
  );
}
