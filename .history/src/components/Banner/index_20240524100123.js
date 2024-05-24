import BannerBackground from "../../assets/imagens/banner.png";
import "./styles.css";

export function Banner() {
  return (
    <header className="background-banner">
      <img src={BannerBackground} alt="Banner Principal da Página da Orgona" />;
    </header>
  );
}
