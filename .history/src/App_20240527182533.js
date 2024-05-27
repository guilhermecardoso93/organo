import { useState } from "react";
import { Banner } from "./components/Banner";
import { Form } from "./components/Form";
import { Times } from "./components/Times";

export default function App(handleChangeColaboradores) {
  const [colaboradores, setColaboradores] = useState([]);
  const times = [
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
        times= { times.map(time => time.name)}
      />
      <Times />
    </div>
  );
}
