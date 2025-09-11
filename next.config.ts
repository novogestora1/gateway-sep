import type { NextConfig } from "next";

// Helper: pega URL da env se existir, valida formato e remove barra final
function getUrl(name: string) {
  const raw = process.env[name]?.trim();
  if (!raw) return null;
  if (!/^https?:\/\//.test(raw)) {
    throw new Error(`Env ${name} inválida. Use URL completa (https://...)`);
  }
  return raw.replace(/\/+$/, "");
}

const HOME            = getUrl("HOME_URL");
const MINHA_CONTA     = getUrl("MINHA_CONTA_URL");
const SORTEIOS        = getUrl("SORTEIOS_URL");
const ADMINCONSUMIDOR = getUrl("ADMINCONSUMIDOR_URL");
const EMPRESA         = getUrl("EMPRESA_URL");
const AFILIADO        = getUrl("AFILIADO_URL");
const ADMINEMPRESA    = getUrl("ADMINEMPRESA_URL");

const nextConfig: NextConfig = {
  async rewrites() {
    const rules: { source: string; destination: string }[] = [];

    // IMPORTANTE: cada app filho deve ter basePath próprio
    if (EMPRESA)         rules.push({ source: "/empresa/:path*",         destination: `${EMPRESA}/:path*` });
    if (AFILIADO)        rules.push({ source: "/afiliado/:path*",        destination: `${AFILIADO}/:path*` });
    if (ADMINEMPRESA)    rules.push({ source: "/adminempresa/:path*",    destination: `${ADMINEMPRESA}/:path*` });
    if (MINHA_CONTA)     rules.push({ source: "/minha-conta/:path*",     destination: `${MINHA_CONTA}/:path*` });
    if (SORTEIOS)        rules.push({ source: "/sorteios/:path*",        destination: `${SORTEIOS}/:path*` });
    if (ADMINCONSUMIDOR) rules.push({ source: "/adminconsumidor/:path*", destination: `${ADMINCONSUMIDOR}/:path*` });

    // Fallback (opcional): só se HOME estiver definido
    if (HOME) rules.push({ source: "/:path*", destination: `${HOME}/:path*` });

    return rules;
  },
};

export default nextConfig;