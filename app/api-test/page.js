"use client"; // This tells Next.js this is a client component

import { useState } from "react";

export default function ApiTestPage() {
  const [response, setResponse] = useState("");

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

      {response && (
        <p style={{ marginTop: 20, fontWeight: "bold" }}>
          Response from API: {response}
        </p>
      )}
    </div>
  );
}
