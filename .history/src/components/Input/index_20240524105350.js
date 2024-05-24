import "./styles.css";

export function Input(label, placeholder) {
  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input placeholder={placeholder}/>
    </div>
  );
}
