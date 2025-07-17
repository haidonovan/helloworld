"use client";

import { useEffect, useState } from "react";

export default function ContactPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/product');
        if (!res.ok) throw new Error('Network response was not ok');
        const json = await res.json();

        if (json?.data && Array.isArray(json.data)) {
          setProducts(json.data);
        } else {
          setProducts([]);
        }
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Failed to load products.</p>;
  if (!products.length) return <p>No products found.</p>;

  return (
    <div>
      <h1>Contact Page</h1>
      <ul>
        {products.map((p, i) => (
          <li key={i}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}
