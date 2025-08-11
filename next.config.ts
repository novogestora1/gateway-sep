import type { NextConfig } from "next";

// SUBSTITUA pelas suas URLs *.vercel.app de cada app:
const CONSUMIDOR = "https://consumidor-XXXXX.vercel.app";
const AFILIADO = "sep-frontend-afiliados-ixodm8dvf.vercel.app";
const EMPRESA = "https://empresa-XXXXX.vercel.app";
const ADMIN_CONSUMIDOR = "https://admin-consumidor-XXXXX.vercel.app";
const ADMIN_EMPRESA = "https://admin-empresa-XXXXX.vercel.app";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      // Raiz e painel -> Consumidor
      { source: "/", destination: `${CONSUMIDOR}/` },
      { source: "/minha-conta/:path*", destination: `${CONSUMIDOR}/minha-conta/:path*` },

      // Afiliado (app tem basePath '/afiliado')
      { source: "/afiliado/:path*", destination: `${AFILIADO}/afiliado/:path*` },

      // Empresa (basePath '/empresa')
      { source: "/empresa/:path*", destination: `${EMPRESA}/empresa/:path*` },

      // Admins (basePaths)
      { source: "/admin-consumidor/:path*", destination: `${ADMIN_CONSUMIDOR}/admin-consumidor/:path*` },
      { source: "/admin-empresa/:path*", destination: `${ADMIN_EMPRESA}/admin-empresa/:path*` },

      // (Opcional) arquivos "soltos" na raiz — manda pro consumidor
      { source: "/favicon.ico", destination: `${CONSUMIDOR}/favicon.ico` },
      { source: "/robots.txt", destination: `${CONSUMIDOR}/robots.txt` },
      { source: "/sitemap.xml", destination: `${CONSUMIDOR}/sitemap.xml` }
    ];
  }
};

export default nextConfig;
