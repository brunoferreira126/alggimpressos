import React from "react";
import "./Hero.css";
import logo from "../assets/logo.png";
import grafica from "../assets/grafica.jpg";

const Hero = () => {
  return (
    <section id="hero"className="hero">

      {/* Formas suaves ao fundo (com a paleta oficial) */}
      <div className="bg-shape shape1"></div>
      <div className="bg-shape shape2"></div>

      <div className="hero-container">

        {/* COLUNA ESQUERDA: texto + logo */}
        <div className="hero-left">
          <img src={logo} alt="Logo ALGG Impressos" className="hero-logo" />

          <h1 className="hero-title">
            Criatividade e Impressões <span>de Alto Padrão</span>
          </h1>

          <p className="hero-subtitle">
            Tecnologia de ponta, materiais premium e atendimento que faz a diferença.
          </p>

          <a
            href="https://wa.me/5585982103431"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn"
          >
            Solicitar Orçamento
          </a>
        </div>

        {/* COLUNA DIREITA: imagem da gráfica */}
        <div className="hero-right">
          <div className="image-wrapper">
            <img src={grafica} alt="Gráfica" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
