import { useState } from "react";

import { Button } from "../Button";
import { Input } from "../Input";
import { ListDropDown } from "../ListDropDown";

import "./styles.css";

export function Form(props) {
  const [name, setName] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [teams, setTeams] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    props.handleChangeColaboradores({ name, cargo, imagem, teams });
    console.log(props.handleChangeColaboradores({ name, cargo, imagem, teams });)
  }
  return (
    <section className="form">
      <form onSubmit={handleSubmit}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <Input
          label="Nome"
          obrigatorio
          placeholder="Digite seu nome..."
          value={name}
          valueChange={(value) => setName(value)}
        />
        <Input
          label="Cargo"
          obrigatorio
          placeholder="Digite seu cargo..."
          value={cargo}
          valueChange={(value) => setCargo(value)}
        />
        <Input
          label="Imagem"
          obrigatorio
          placeholder="Digite seu nome"
          value={imagem}
          valueChange={(value) => setImagem(value)}
        />
        <ListDropDown
          obrigatorio
          itens={props.times}
          label="Times"
          value={teams}
          valueChange={(value) => setTeams(value)}
        />
        <Button> Criar Card</Button>
      </form>
    </section>
  );
}
