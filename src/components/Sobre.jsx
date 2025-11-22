import { useEffect, useRef } from "react";
import "./Sobre.css";
import useReveal from "../hooks/useReveal";

// Importando imagens reais
import fachada from "../assets/sobre/fachada.jpeg";
import fachada2 from "../assets/sobre/fachada2.jpeg";
import fachada3 from "../assets/sobre/fachada3.jpeg";
import entrada from "../assets/sobre/entrada.jpeg";
import maquinas from "../assets/sobre/maquinas.jpeg";

export default function Sobre() {
  const revealRef = useReveal();
  const trackRef = useRef(null);

  // 🟢 Ordem solicitada: fachada → fachada2 → fachada3 → entrada → máquinas
  const carouselImages = [fachada, fachada2, fachada3, entrada, maquinas];

  useEffect(() => {
    const track = trackRef.current;
    let scrollAmount = 0;
    let animationFrame;
    let isHoveredOrTouched = false;

    const scroll = () => {
      if (!isHoveredOrTouched) {
        scrollAmount += 0.25; // velocidade suave e leve
        if (scrollAmount >= track.scrollWidth / 2) {
          scrollAmount = 0; // reinicia suavemente
        }
        track.scrollLeft = scrollAmount;
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    scroll();

    const handleEnter = () => (isHoveredOrTouched = true);
    const handleLeave = () => (isHoveredOrTouched = false);

    track.addEventListener("mouseenter", handleEnter);
    track.addEventListener("mouseleave", handleLeave);
    track.addEventListener("touchstart", handleEnter);
    track.addEventListener("touchend", handleLeave);

    return () => {
      cancelAnimationFrame(animationFrame);
      track.removeEventListener("mouseenter", handleEnter);
      track.removeEventListener("mouseleave", handleLeave);
      track.removeEventListener("touchstart", handleEnter);
      track.removeEventListener("touchend", handleLeave);
    };
  }, []);

  return (
    <section className="sobre-section" id="sobre" ref={revealRef}>
      <div className="sobre-container">
        {/* TEXTO */}
        <div className="sobre-texto">
          <h2 className="sobre-title">
            Sobre <span>Nós</span>
          </h2>

          <p>
            Há mais de <strong>8 anos</strong>, a ALGG Gráfica e Estamparia se dedica
            a entregar produtos de altíssima qualidade para empresas, profissionais
            autônomos e clientes de todo o Brasil.
          </p>

          <p>
            Com equipamentos modernos e uma equipe apaixonada pelo que faz, oferecemos
            soluções completas em comunicação visual, impressão digital, sublimação,
            carimbos e muito mais.
          </p>

          <p>
            Nosso compromisso é simples:{" "}
            <strong>você imagina, nós transformamos em realidade.</strong>
          </p>
        </div>

        {/* CARROSSEL DE IMAGENS */}
    <div className="sobre-carousel" ref={trackRef}>
  <div className="sobre-carousel-track">
    {[...carouselImages, ...carouselImages].map((img, index) => (
      <img
        key={index}
        src={img}
        className="carousel-img"
        alt={`Foto da gráfica ${index + 1}`}
      />
    ))}
  </div>
</div>

      </div>
    </section>
  );
}
