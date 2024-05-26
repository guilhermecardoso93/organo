import "./styles.css";

export function ListDropDown({ label, itens }) {
  return (
    <div>
      <label>{label}</label>
      <select>
        {itens.map((item, index) => {
          return <option key={index}>{item}</option>;
        })}
      </select>
    </div>
  );
}
