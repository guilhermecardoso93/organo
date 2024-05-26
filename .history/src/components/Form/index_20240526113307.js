import { Input } from "../Input";

export function Form() {
  return (
    <section>
      <form>
        <h2>Preencha os dados para criar o card do</h2>
        <Input label="Nome" placeholder="Digite seu nome..." />
        <Input label="Cargo" placeholder="Digite seu cargo..." />
        <Input label="Imagem" placeholder="Digite seu nome" />
      </form>
    </section>
  );
}
