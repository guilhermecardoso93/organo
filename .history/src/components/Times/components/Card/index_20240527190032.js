import './styles.css'

export function Card({ name, cargo, imagem }) {
  return (
    <div>
      <div className="cabecalho">
        <img src={imagem} alt="" />
      </div>
      <div className="rodape">
        <h4>{name}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
}
