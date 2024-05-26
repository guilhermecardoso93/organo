import Imagem from "../../assets/imagens/logo.png";
import { Time } from "./components/Time";
export function Times(props) {
  return (
    <div>
      <div>
        <h2>Minha Organização</h2>
      </div>
      <ul>
        <Time name='Programação' />
        <Time name='Ux' />
      </ul>
    
    </div>
  );
}
