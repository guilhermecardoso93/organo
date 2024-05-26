import { useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { ListDropDown } from "../ListDropDown";
import "./styles.css";

export function Form() {
  const [value, setValue] = useState("");
  const [name, setName] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImage] = useState("");

  const times = [
    "Programação",
    "Front-End",
    "Data Science",
    "Devops",
    "UX e Design",
    "Mobile",
    " Inovação e Gestão",
  ];

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Oi");
  }
  return (
    <section className="form">
      <form onSubmit={handleSubmit}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <Input
          label="Nome"
          obrigatorio
          placeholder="Digite seu nome..."
          valueChange={(value) => setValue(value)}
        />
        <Input
          label="Cargo"
          obrigatorio
          placeholder="Digite seu cargo..."
          valueChange={(value) => setValue(value)}
        />
        <Input
          label="Imagem"
          obrigatorio
          placeholder="Digite seu nome"
          valueChange={(value) => setValue(value)}
        />
        <ListDropDown itens={times} label="Times" />
        <Button> Criar Card</Button>
      </form>
    </section>
  );
}
