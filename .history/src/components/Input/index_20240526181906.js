import "./styles.css";

export function Input({ label, placeholder, obrigatorio, value, valueChange }) {
  function handleTap(event) {
    valueChange(event.target.value);
  }

  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input
        placeholder={placeholder}
        required={obrigatorio}
        onChange={handleTap}
        value={value}
      />
    </div>
  );
}
