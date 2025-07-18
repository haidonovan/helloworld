"use client"; // This tells Next.js this is a client component

import { useState } from "react";

//1 import route from api 

import { getOneProduct } from "../api/db_api_json/route";



export default function ApiTestPage() {
  const [response, setResponse] = useState("");
  const [product, setProduct] = useState(null);


  async function handleClick() {
    const res = await fetch("/api/todoItem");
    const text = await res.text(); // or res.json() if JSON
    setResponse(text);
  }

  async function handlePick() {
    const res = await fetch("/api/pickup");
    const text = await res.text(); // or res.json() if JSON
    setResponse(text);
  }

    async function handleHi() {
    const res = await fetch("/api/hi");
    const text = await res.text(); // or res.json() if JSON
    setResponse(text);
  }

    async function handleProduct(){
      const res = await getOneProduct(1);
      setProduct(res);
    }

  return (
    <div style={{ padding: 20 }}>
      <button onClick={handleClick} style={{ padding: "10px 20px", fontSize: 16 }}>
        Call API
      </button>

      <button onClick={handlePick} style={{ padding: "10px 20px", fontSize: 16 }}>
        PICK
      </button>

      <button onClick={handleHi} style={{ padding: "10px 20px", fontSize: 16 }}>
        Hi To the Server
      </button>

      <button onClick={handleProduct}>
        handle Product
      </button>

      {response && (
        <p style={{ marginTop: 20, fontWeight: "bold" }}>
          Response from API: {response}
        </p>
      )}

      {/* json product */}
      
      {product && (
        <div style={{ marginTop: 20 }}>
          <h3>Product Fetched:</h3>
          <p><strong>Title:</strong> {product.title}</p>
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Description:</strong> {product.description}</p>
        </div>
      )}
    </div>
  );
}
