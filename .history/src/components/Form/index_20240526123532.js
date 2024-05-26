import { Input } from "../Input";
import { ListDropDown } from "../ListDropDown";
import "./styles.css";

export function Form() {
  const times = [
    "Programação",
    "Front-End",
    "Data Science",
    "Devops",
    "UX e Design",
    "Mobile",
    " Inovação e Gestão",
  ];
  return (
    <section className="form">
      <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <Input label="Nome" placeholder="Digite seu nome..." />
        <Input label="Cargo" placeholder="Digite seu cargo..." />
        <Input label="Imagem" placeholder="Digite seu nome" />
        <ListDropDown itens={times} label="Times" />
        <button>Criar Card</button>
      </form>
    </section>
  );
}
