// app/components/Sidebar.js
import DarkModeToggle from "@/components/mode/DarkModeToggle";
import Link from "next/link";

export default function Sidebar({ children }) {
  return (
<div style={{ display: "flex", height: "100vh" }}>
      <aside style={{
        width: "220px",
        backgroundColor: "#1e1e1e",
        color: "#fff",
        padding: "20px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection:"column",
        justifyContent:"space-between"
      }}>
          <nav style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <h2 style={{ marginBottom: "20px", fontSize: "20px" }}>🌟 My Menu</h2>
            <Link href="/" style={linkStyle}>🏠 Home</Link>
            <Link href="/profile" style={linkStyle}>👤 Profile</Link>
            <Link href="/about" style={linkStyle}>📘 About</Link>
            <Link href="/projects" style={linkStyle}>📁 Projects</Link>
            <Link href="/contact" style={linkStyle}>✉️ Contact</Link>
            <Link href="/more" style={linkStyle}>➕ More</Link>
            <Link href="/product" style={linkStyle}>📦 Product</Link>
            <Link href="/students" style={linkStyle}>🕴️ Students</Link>
            <Link href="/menubar" style={linkStyle}>🦜 menubar</Link>
            <Link href="/pick_number" style={linkStyle}>🔢 pick number</Link>
            <Link href="/loading" style={linkStyle}>🧬 loading</Link>
            <Link href="/check_attendance" style={linkStyle}>✅ check attendance</Link>
            <Link href="/chart_student" style={linkStyle}>📊 chart student</Link>
          </nav>

          <nav>
            <DarkModeToggle/>
          </nav>
        
      </aside>

      {/* 👉 Render children content beside the sidebar */}
      <main style={{ flex: 1, padding: "20px", overflowY: "auto" }}>
        {children}
      </main>
    </div>
  );
}

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  padding: "8px 12px",
  borderRadius: "6px",
  transition: "background 0.2s",
  backgroundColor: "#2c2c2c"
};
