import Presente from "../components/Presente";
import Porta from "../components/Porta";
import PortaModel from "../model/porta";
import { useState } from "react";
import { atualizarPortas, criarPortas } from "../functions/portas";

export default function Home() {
  const [portas, setPortas] = useState(criarPortas(3, 2));
  console.log(portas)

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
    <div style={{ display: "flex" }}>
      {/* <Presente /> */}
      {renderizarPortas()}
    </div>
  );
}
