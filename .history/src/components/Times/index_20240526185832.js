import Imagem from "../../assets/imagens/logo.png";
export function Times(props) {
  return (
    <div>
      <div>
        <h2>Minha Organização</h2>
      </div>

      <section>
        <h3>{props.name}</h3>
      </section>
    </div>
  );
}
