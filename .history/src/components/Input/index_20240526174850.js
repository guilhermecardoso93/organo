import "./styles.css";

export function Input({ label, placeholder, obrigatorio }) {
  let value = ''
  function handleTap(event) {
    value = event.target.value
    console.log(value);
  }

  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input
        placeholder={placeholder}
        required={obrigatorio}
        onChange={handleTap}
      />
    </div>
  );
}
