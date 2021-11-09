import Presente from "../components/Presente";
import Porta from "../components/Porta";

export default function Home() {
  return (
    <div>
      <Presente />
      <Porta isSelecionada={false} />
      <Porta isSelecionada={true} />
    </div>
  );
}
