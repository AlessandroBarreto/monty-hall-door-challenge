import styles from "../styles/Porta.module.scss";

export default function Porta({ isSelecionada }) {
  const selecionada = isSelecionada ? styles.selecionada : "";
  
  return (
    <div className={styles.area}>
      <div className={`${styles.estrutura} ${selecionada}`}>
        <div className={styles.porta}>
          <div className={styles.numero}>3</div>
          <div className={styles.macaneta}></div>
        </div>
      </div>
      <div className={styles.chao}></div>
    </div>
  );
}
