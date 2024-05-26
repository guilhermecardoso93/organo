import "./styles.css";

export function ListDropDown({ label, itens, value, valueChange,required }) {
  return (
    <div className='list-dropdown'>
      <label>{label}</label>
      <select 
        required={required}
        value={value}
        onChange={event => valueChange(event.target.value)}
        
      >
        {itens.map((item, index) => {
          return <option key={index}>{item}</option>;
        })}
      </select>
    </div>
  );
}
