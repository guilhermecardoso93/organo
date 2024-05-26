import "./styles.css";

export function ListDropDown({ label, items }) {
  return (
    <div>
      <label>{label}</label>
      <select>
        {items.map((item, i) => {
          <option key={i}>{item}</option>;
        })}
      </select>
    </div>
  );
}
