import { useState } from "react";

export default function Home() {
  const [link, setLink] = useState("");

  async function handleUpload(e) {
    e.preventDefault();
    const file = e.target.image.files[0];
    const formData = new FormData();
    formData.append("image", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setLink(`${location.origin}/${data.id}`);
  }

  return (
    <div style={{ padding: 40, fontFamily: "monospace" }}>
      <h1>🕵️ Image Logger (White Hat)</h1>
      <form onSubmit={handleUpload}>
        <input type="file" name="image" required />
        <button type="submit">Gerar Link</button>
      </form>
      {link && (
        <div>
          <p>Compartilhe esse link:</p>
          <code>{link}</code>
        </div>
      )}
    </div>
  );
}