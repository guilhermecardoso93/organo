import { useState } from "react";
import { Banner } from "./components/Banner";
import { Form } from "./components/Form";
import { Times } from "./components/Times";

export default function App(handleChangeColaboradores) {
  const [colaboradores, setColaboradores] = useState([]);
  const teams = [
    "Front-End",
    "Data Science",
    "Devops",
    "UX e Design",
    "Mobile",
    " Inovação e Gestão",
    "Programação",
  ];

  function handleNewColaboradores(colaborador) {
    setColaboradores([...colaboradores], colaborador);
    console.log(setColaboradores);
  }

  return (
    <div className="app">
      <Banner />
      <Form
        handleChangeColaboradores={(colaborador) =>
          handleNewColaboradores(colaborador)
        }
        teams={teams.map((team) => team.name)}
      />
      <Times />
    </div>
  );
}
