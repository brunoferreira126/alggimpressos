import React from "react";
import "./Footer.css";

export default function Footer() {
  
  const scrollToId = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 50,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="footer-section">
      
      <div className="footer-container">

        {/* BLOCO 1 — MARCA */}
        <div className="footer-brand">
          <h2>
            ALGG <span>Impressos</span>
          </h2>
          <p>A solução completa em serviços gráficos e comunicação visual.</p>
        </div>

        {/* BLOCO 2 — LINKS */}
      
        <nav className="footer-links" aria-label="Links do rodapé">
  <h3>Links</h3>
  <div className="footer-links-plain">
    <span className="footer-link-ghost" onClick={() => scrollToId("hero")}>Início</span>
    <span className="footer-link-ghost" onClick={() => scrollToId("servicos")}>Serviços</span>
    <span className="footer-link-ghost" onClick={() => scrollToId("depoimentos")}>Depoimentos</span>
    <span className="footer-link-ghost" onClick={() => scrollToId("sobre")}>Sobre</span>
    <span className="footer-link-ghost" onClick={() => scrollToId("localizacao")}>Localização</span>
    <span className="footer-link-ghost" onClick={() => scrollToId("contato")}>Contato</span>
  </div>
</nav>

    

        {/* BLOCO 3 — CONTATO */}
        <div className="footer-contact">
          <h3>Contato</h3>

          <p>
            <span className="footer-icon">📞</span>
            <a href="tel:+5585982103431" className="plain-link">
              +55 (85) 98210-3431
            </a>
          </p>

          <p>
            <span className="footer-icon">📍</span>
            Pindoretama - CE
          </p>

          <div className="footer-buttons">
            <a className="footer-btn" href="https://wa.me/5585982103431" target="_blank">
              WhatsApp
            </a>
            <a className="footer-btn" href="mailto:alggservicosimpressos@gmail.com">
              E-mail
            </a>
            <a className="footer-btn" href="https://instagram.com/algg.impressos" target="_blank">
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} ALGG Serviços Impressos — Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
