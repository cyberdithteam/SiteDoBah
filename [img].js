import { useEffect } from "react";

export default function Logger({ imageUrl }) {
  useEffect(() => {
    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ua: navigator.userAgent }),
    });
  }, []);

  return (
    <div>
      <img src={imageUrl} style={{ maxWidth: "100%" }} />
    </div>
  );
}

export async function getServerSideProps({ params }) {
  return {
    props: {
      imageUrl: `/uploads/${params.img}.jpg`, // Suporta apenas .jpg
    },
  };
}