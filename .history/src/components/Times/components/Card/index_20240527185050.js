export function Card({ name, cargo, imagem }) {
  return (
    <div>
      <div className="cabeçalho">
        <imagem src={imagem} alt="" />
      </div>
      <div>
        <h4>{name}</h4>
        <p>{cargo}</p>
      </div>
    </div>
  );
}
