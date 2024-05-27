import "./styles.css";

export function ListDropDown({ label, itens, value, valueChange, required }) {
  return (
    <div className="lista-suspensa">
      <label>{label}</label>
      <select
        onChange={(evento) => valueChange(evento.target.value)}
        required={required}
        value={value}
      >
        {itens.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
}
