import "./styles.css";

export function Card({ name, cargo, imagem }) {
  return (
    <div className="card">
      <div className="cabecalho">
        <img src={imagem} alt={name} />
      </div>
      <div className="rodape">
        <h4>{name}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
}
