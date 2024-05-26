import "./styles.css";

export function ListDropDown({ label, itens }) {
  return (
    <div className='list-dropdown'>
      <label>{label}</label>
      <select>
        {itens.map((item, index) => {
          return <option key={index}>{item}</option>;
        })}
      </select>
    </div>
  );
}
