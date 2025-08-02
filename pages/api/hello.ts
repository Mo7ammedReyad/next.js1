export const config = {
  runtime: 'experimental-edge'
};

export default async function handler() {
  return new Response(JSON.stringify({ message: '👋 مرحبًا من Cloudflare Workers!' }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}