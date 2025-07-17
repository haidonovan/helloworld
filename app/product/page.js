// app/product/page.js
import Link from 'next/link';

const products = [
  { id: '1', name: 'Cool Shirt', price: 29.99 },
  { id: '2', name: 'Nice Hat', price: 15.49 },
];

export default function ProductListPage() {
    console.log("hello world");
  return (
    <div style={{ padding: 20 }}>
      <h1>Product List</h1>
      <ul>
        {products.map(product => (
          <li key={product.id} style={{ marginBottom: 12 }}>
            <Link href={`/product/${product.id}`}>
              <strong>{product.name}</strong> - ${product.price.toFixed(2)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
