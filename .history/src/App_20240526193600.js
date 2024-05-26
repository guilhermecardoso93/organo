import { useState } from "react";
import { Banner } from "./components/Banner";
import { Form } from "./components/Form";
import { Times } from "./components/Times";
import { Time } from "./components/Times/components/Time";

export default function App(handleChangeColaboradores) {
  const [colaboradores, setColaboradores] = useState([]);

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
    </div>
  );
}
