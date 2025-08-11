import type { NextConfig } from "next";

// ✅ Defina essa env na Vercel (Settings → Environment Variables)
// AFILIADO_URL = https://seu-app-afiliado.vercel.app   (sem barra no final)
function must(name: string) {
  const v = process.env[name]?.trim() || "";
  if (!/^https?:\/\//.test(v)) {
    throw new Error(`Env ${name} ausente/ inválida. Configure ${name} com URL completa (https://...)`);
  }
  return v.replace(/\/+$/, "");
}

const AFILIADO = must("AFILIADO_URL");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      // Só roteamos o que existe hoje:
      { source: "/afiliado/:path*", destination: `${AFILIADO}/afiliado/:path*` },
    ];
  },
};

export default nextConfig;
