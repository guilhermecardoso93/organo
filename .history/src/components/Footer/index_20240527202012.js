import fb from "../../assets/imagens/fb.png";
import ig from "../../assets/imagens/ig.png";
import tw from "../../assets/imagens/tw.png";
import logo from "../../assets/imagens/logo.png";

export function Footer() {
  return (
    <footer>
      <div>
        <a href="/">
          <img src={fb} alt="página do Facebook" />
        </a>
        <a href="/">
          <img src={ig} alt="página do Instagram" />
        </a>
        <a href="/">
          <img src={tw} alt="página do Twitter" />
        </a>
      </div>
      <img src={logo} alt="página do Facebook" />
      <p>Desenvolvido pela Alura</p>
    </footer>
  );
}
