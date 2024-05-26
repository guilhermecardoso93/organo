import { useState } from "react";
import { Banner } from "./components/Banner";
import { Form } from "./components/Form";

export default function App() {
  const [ colaboradores, setColaboradores] = useState([])

  function handleNewColaboradores(colaborador) {

  }

  return (
    <div>
      <Banner />
      <Form handleChangeColaboradores = {colaborador => handleNewColaboradores(colaborador)}/>
    </div>
  );
}


