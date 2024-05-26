import "./styles.css";

export function Input({label, placeholder, obrigatorio}) {
  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input placeholder={placeholder} required={obrigatorio}/>
    </div>
  );
}
