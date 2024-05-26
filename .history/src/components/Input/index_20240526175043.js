import { useState } from "react";
import "./styles.css";

export function Input({ label, placeholder, obrigatorio }) {
  let [value, setValue] = useState("");

  function handleTap(event) {
    setValue = event.target.value;
    console.log(value);
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
