import "./styles.css";

export function ListDropDown({ label, itens }) {
  return (
    <div>
      <label>{label}</label>
      <select>
        {itens.map((item) => {
          return <option>{item}</option>;
        })}
      </select>
    </div>
  );
}
