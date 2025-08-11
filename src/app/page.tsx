export default function Home() {
  return (
    <main style={{display:'grid',placeItems:'center',height:'100dvh',fontFamily:'system-ui'}}>
      <div>
        <h1>Gateway – Sorteios & Prêmios</h1>
        <p>Este projeto faz o roteamento por caminho para os 5 apps.</p>
        <ul style={{lineHeight:1.8}}>
          <li>/ → Consumidor</li>
          <li>/minha-conta → Consumidor</li>
          <li>/afiliado → Afiliado</li>
          <li>/empresa → Empresa</li>
          <li>/admin-consumidor → Admin Consumidor</li>
          <li>/admin-empresa → Admin Empresa</li>
        </ul>
      </div>
    </main>
  );
}
