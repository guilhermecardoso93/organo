import { useState } from "react";
import { Banner } from "./components/Banner";
import { Form } from "./components/Form";

export default function App(handleChangeColaboradores) {
  const [colaboradores, setColaboradores] = useState([]);

  function handleNewColaboradores(colaborador) {
    console.log(colaborador)
  }

  return (
    <div>
      <Banner />
      <Form
        handleChangeColaboradores={(colaborador) =>
          handleNewColaboradores(colaborador)
        }
      />
    </div>
  );
}
