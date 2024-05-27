import { useState } from "react";

import { Button } from "../Button";
import { Input } from "../Input";
import { ListDropDown } from "../ListDropDown";

import "./styles.css";

export function Form(props) {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
    });
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  }
  return (
    <section className="form">
      <form onSubmit={handleSubmit}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <Input
          label="Nome"
          obrigatorio
          placeholder="Digite seu nome..."
          value={nome}
          valueChange={(value) => setNome(value)}
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
          value={time}
          valueChange={(value) => setTime(value)}
        />
        <Button> Criar Card</Button>
      </form>
    </section>
  );
}
