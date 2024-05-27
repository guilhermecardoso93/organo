import './styles.css'
export function Card({ name, cargo, imagem }) {
  return (
    <div>
      <div className="cabecalho">
        <imagem src={imagem} alt="" />
      </div>
      <div className="rodape">
        <h4>{name}</h4>
        <p>{cargo}</p>
      </div>
    </div>
  );
}
