import { useState } from "react";
import { Banner } from "./components/Banner";
import { Form } from "./components/Form";
import { Times } from "./components/Times";

export default function App(handleChangeColaboradores) {
  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]
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
