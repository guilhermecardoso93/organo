import { Input } from "../Input";

export function Form() {
  return (
    <form>
      <Input label="Nome" placeholder="Digite seu nome..." />
      <Input label="Cargo" placeholder="Digite seu cargo..." />
      <Input label="Imagem" placeholder="Digite seu nome" />
    </form>
  );
}
