import "./styles.css";

export function ListDropDown({ label, itens, valor, valueChange, required }) {
  return (
    <div className="list-dropdown">
      <label>{label}</label>
      <select
        onChange={(evento) => valueChange(evento.target.value)}
        required={required}
        value={valor}
      >
        <option value=''></option>
        {itens.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
}
