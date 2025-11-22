import React, { useState } from "react";
import "./Services.css";
import useReveal from "../hooks/useReveal";

import sublimacao from "../assets/service/blusas.png";
import carimbos from "../assets/service/carimbo.png";
import cartoes from "../assets/service/cartoes.png";
import adesivosImg from "../assets/service/adesivos.jpg";
import banners from "../assets/service/banners.jpg";
import fachada from "../assets/service/fachada.jpg";
import calendarios from "../assets/service/calendarios.png";
import cardenetas from "../assets/service/cardenetas.png";
import chaveiros from "../assets/service/chaveiros.png";
import garrafas from "../assets/service/garrafas.png";
import toalhas from "../assets/service/toalhas.png";
import mdf from "../assets/service/mdf.png";

// placeholder de fallback
const placeholder = "https://via.placeholder.com/500x400?text=Imagem+Indisponivel";

// serviços com imagem
const servicesList = [
  { title: "Sublimação de Blusas", img: sublimacao },
  { title: "Carimbos Personalizados", img: carimbos },
  { title: "Cartões de Visita", img: cartoes },
  { title: "Adesivos", img: adesivosImg },
  { title: "Banners", img: banners },
  { title: "Fachadas e Comunicação Visual", img: fachada },

  // novos com imagens
  
  { title: "Calendários", img: calendarios },
  { title: "Cadernetas", img: cardenetas },
  { title: "Chaveiros", img: chaveiros },
  { title: "Garrafas / Squeezes", img: garrafas },
  { title: "Toalhas Personalizadas", img: toalhas },
  { title: "MDF (Porta-retratos, placas, etc.)", img: mdf },
];

// lista de serviços sem foto (mostrada no modal)
const otherServices = [
  "Kits de casamento",
  "Crachás",
  "Blocos",
  "Agendas",
  "Placas QR Code",
  "Azulejo",
  "Agenda escolar",
  "MousePad",
  "Embalagem de bombons",
  "Etiquetas",
  "Porta-chaves",
  "Cardápios",
  "Almofadas",
  "Porta-retrato",
  "Panfletos",
  "E muito mais..."
];

function ServiceCard({ item, onError }) {
  const ref = useReveal();
  return (
    <div className="service-card fade-up" ref={ref}>
      <div className="service-img-wrapper">
        <img src={item.img} alt={item.title} onError={onError} loading="lazy" />
      </div>
      <h3 className="service-name">{item.title}</h3>
    </div>
  );
}

function OtherServicesCard({ onOpen }) {
  const ref = useReveal();
  return (
    <button className="service-card other-card fade-up" ref={ref} onClick={onOpen} aria-label="Abrir lista de outros serviços">
      <div className="service-img-wrapper other-icon" aria-hidden="true">
        {/* ícone simples usando SVG */}
        <svg width="72" height="72" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.2" fill="#fff"/>
          <path d="M7 8h10M7 12h10M7 16h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        </svg>
      </div>
      <h3 className="service-name">Outros serviços</h3>
      <p className="service-sub">Clique para ver a lista completa</p>
    </button>
  );
}

export default function Services() {
  const titleRef = useReveal();
  const [isModalOpen, setModalOpen] = useState(false);

  const handleImgError = (e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = placeholder;
  };

  return (
    <section className="services-section" id="servicos">
      <div className="services-container">
        <h2 className="services-title fade-up" ref={titleRef}>
          Nossos <span>Serviços</span>
        </h2>

        <div className="services-grid">
          {servicesList.map((item, index) => (
            <ServiceCard key={index} item={item} onError={handleImgError} />
          ))}

          {/* cartão que abre o modal com os outros serviços */}
          <OtherServicesCard onOpen={() => setModalOpen(true)} />
        </div>
      </div>

      {/* Modal simples para mostrar os outros serviços */}
      {isModalOpen && (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="other-services-title" onClick={() => setModalOpen(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setModalOpen(false)} aria-label="Fechar">×</button>
            <h3 id="other-services-title">Outros Serviços</h3>
            <p className="modal-intro">Atendemos também (entre outros):</p>
            <ul className="modal-list">
              {otherServices.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
            <div style={{ textAlign: "right", marginTop: "1rem" }}>
              <button className="footer-btn" onClick={() => setModalOpen(false)}>Fechar</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
