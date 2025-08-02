import { useEffect, useState } from 'react';

export default function Home() {
  const [msg, setMsg] = useState('');
  useEffect(() => {
    fetch('/api/hello')
      .then((r) => r.json())
      .then((d) => setMsg(d.message));
  }, []);
  return (
    <main style={{ padding: 40 }}>
      <h1>🔵 Next.js على Cloudflare Workers</h1>
      <p>📡 رسالة من API Route:</p>
      <pre>{msg}</pre>
      <p>🔥 أول تجربة على Cloudflare بس من خلال GitHub!</p>
    </main>
  );
}