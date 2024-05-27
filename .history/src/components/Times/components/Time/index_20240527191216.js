import { Card } from "../Card";
import "./styles.css";

export function Time(props) {
  return (
    <section
      className="time-container"
      style={{ backgroundColor: props.corSecundaria }}
    >
      <h3 style={{ borderColor: props.corPrimaria }}>{props.name}</h3>
      <div>
        {props.colaboradores.map((colaborador) => (
          <Card
            name={colaborador.name}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
          />
        ))}
      </div>
    </section>
  );
}
