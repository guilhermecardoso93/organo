import "./styles.css";

export function Input({ label, placeholder, obrigatorio }) {
  function handleTap(event) {
    console.log(event.target.value);
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
