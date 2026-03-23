import Carrinho from "./Carrinho.jsx";
import styles from "./App.module.css";

function App() {
  const itensNoCarrinho = [
    {
      id: 1,
      nome: "Teclado Mecânico",
      preco: 250.00,
      quantidade: 1,
      imagem: "https://images.kabum.com.br/produtos/fotos/472044/teclado-mecanico-gamer-kbm-gaming-tg600-preto-60-e-abnt2-rgb-switch-gateron-blue-kgtg600ptaz_1709825263_gg.jpg"
    },
    {
      id: 2,
      nome: "Mouse Gamer",
      preco: 120.00,
      quantidade: 2,
      imagem: "https://cdn.awsli.com.br/600x450/563/563019/produto/275778743/8acc2fcc135d6a80b5449fac5372c028-fridm6wqan.jpeg"
    },
    {
      id: 3,
      nome: "Monitor 24 polegadas",
      preco: 800.00,
      quantidade: 1,
      imagem: "https://images.kabum.com.br/produtos/fotos/sync_mirakl/471635/Monitor-Gamer-Mitsushiba-24-Polegadas-LED-1920-x-1080-60hz-Multim-dia-FHD-HDMI-VGA_1697837887_gg.jpg"
    }
  ];

  return (
    <div className={styles.telaApp}>
      <h1 className={styles.tituloApp}>🛒 Carrinho de Compras</h1>
      <Carrinho itens={itensNoCarrinho} />
    </div>
  );
}

export default App;
