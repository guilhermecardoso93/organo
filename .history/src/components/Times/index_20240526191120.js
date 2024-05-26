import Imagem from "../../assets/imagens/logo.png";

import { Time } from "./components/Time";

import "./styles.css";
export function Times(props) {
  return (
    <div className="times-container-main">
      <div>
        <h2>Minha Organização</h2>
      </div>
      <div className="times-container-list">
        <Time name="Programação" />
        <Time name="Ux" />
      </div>
    </div>
  );
}
