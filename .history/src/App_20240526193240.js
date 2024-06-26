import { useState } from "react";
import { Banner } from "./components/Banner";
import { Form } from "./components/Form";
import { Times } from "./components/Times";
import { Time } from "./components/Times/components/Time";

export default function App(handleChangeColaboradores) {
  const [colaboradores, setColaboradores] = useState([]);
  const times = [
    {
      nome: "Front-End",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      nome: "Data Sciense",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      nome: "Devops",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      nome: "UX e Design",
      corPrimaria: "#D86EBF",
      corSecundaria: "#FAE5F5",
    },
    {
      nome: "Mobile",
      corPrimaria: "#FEBA05",
      corSecundaria: "#FFF5D9",
    },
    {
      nome: "Inovação e Gestão",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
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
      />

      <Times />
      {times.map((time, index) => (
        <Time nome={time.nome} key={index}/>
      ))}
    </div>
  );
}
