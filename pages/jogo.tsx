import { useState } from "react";
import Link from "next/link";
import Porta from "../components/Porta";
import { atualizarPortas, criarPortas } from "../functions/portas";
import styles from "../styles/Jogo.module.scss";

export default function Jogo() {
  const [portas, setPortas] = useState(criarPortas(4, 4));
  console.log(portas);

  const renderizarPortas = () => {
    return portas.map((porta) => {
      return (
        <Porta
          key={porta.numero}
          value={porta}
          onChange={(novaPorta) =>
            setPortas(atualizarPortas(portas, novaPorta))
          }
        />
      );
    });
  };

  return (
    <div id={styles.jogo}>
      <div className={styles.portas}>{renderizarPortas()}</div>
      <div className={styles.botoes}>
        <Link href="/">
          <button>reiniciar jogo</button>
        </Link>
      </div>
    </div>
  );
}
