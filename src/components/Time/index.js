import { Card } from "../../components/Card";

import "./styles.css";

export function Time(props) {
  const css = { backgroundColor: props.corSecundaria };

  return props.colaboradores.length > 0 ? (
    <section className="time" style={css}>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      <div className="colaboradores">
        {props.colaboradores.map((colaborador) => (
          <Card
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
          />
        ))}
      </div>
    </section>
  ) : (
    ""
  );
}
