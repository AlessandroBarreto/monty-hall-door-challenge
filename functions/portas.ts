import PortaModel from "../model/porta";

export function criarPortas(qnt: number, selecionada: number): PortaModel[] {
  return Array.from({ length: qnt }, (_, i) => {
    const numero = i + 1;
    const temPresente = numero === selecionada;
    return new PortaModel(numero, temPresente);
  });
}

export function atualizarPortas(
  portas: PortaModel[],
  portaModificada: PortaModel
) {
  return portas.map((portaAtual) => {
    const igualAModificada = portaAtual.numero === portaModificada.numero;

    if (igualAModificada) {
      return portaModificada;
    } else {
      return portaModificada.aberta ? portaAtual : portaAtual.desselecionar();
    }
  });
}
