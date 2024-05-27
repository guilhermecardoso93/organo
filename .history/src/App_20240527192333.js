import { useState } from "react";
import { Banner } from "./components/Banner";
import { Form } from "./components/Form";
import { Times } from "./components/Times";

export default function App(handleChangeColaboradores) {
  const [colaboradores, setColaboradores] = useState([]);
  const times = [
    {
      name: "Front-End",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      name: "Data Sciense",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      name: "Devops",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      name: "UX e Design",
      corPrimaria: "#D86EBF",
      corSecundaria: "#FAE5F5",
    },
    {
      name: "Mobile",
      corPrimaria: "#FEBA05",
      corSecundaria: "#FFF5D9",
    },
    {
      name: "Inovação e Gestão",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
    {
      name: "Programação",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9",
    },
  ];

  function handleNewColaboradores(colaborador) {
    setColaboradores([...colaboradores, colaborador]);
  }

  return (
    <div className="app">
      <Banner />
      <Form
        times={times.map((time) => time.name)}
        handleChangeColaboradores={(colaborador) =>
          handleNewColaboradores(colaborador)
        }
      />
      <div>
        <h2>Minha Organização</h2>
        <Times colaboradores={colaboradores} />
      </div>
      
    </div>
  );
}
