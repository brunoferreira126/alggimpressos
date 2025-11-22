import React from "react";
import "./Contacts.css"; // importe somente se usar arquivo separado

export default function Contacts() {
  const instagramUrl = "https://instagram.com/algg.impressos";
  const whatsappUrl = "https://wa.me/5585982103431"; // +55 (Brasil) + número (85982103431)
  const emailUrl = "mailto:alggservicosimpressos@gmail.com";

  return (
    <section className="contacts-section" id="contato" aria-labelledby="contacts-title">
      <div className="bg-shape shape1" aria-hidden="true" />
      <div className="bg-shape shape2" aria-hidden="true" />

      <div className="contacts-container">
        <h2 id="contacts-title" className="contacts-title">Fale com a <span>ALGG</span></h2>
        <p className="contacts-sub">
          Estamos prontos para atender: orçamentos, pedidos no atacado e dúvidas rápidas.
        </p>

        <div className="contacts-grid">
          <a
            className="contact-card"
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir Instagram da ALGG (nova aba)"
          >
            <span className="contact-icon" aria-hidden="true">
              {/* Instagram SVG */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.6" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.5 6.5h.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <div className="contact-meta">
              <div className="contact-title">Instagram</div>
              <div className="contact-desc">@algg.impressos</div>
            </div>
          </a>

          <a
            className="contact-card"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir conversa no WhatsApp com ALGG (nova aba)"
          >
            <span className="contact-icon" aria-hidden="true">
              {/* WhatsApp SVG */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 12.06A9 9 0 1 0 11.06 21L7 22l1.14-4.06A9 9 0 0 0 21 12.06z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.7 14.3c-.3-.15-1.76-.87-2.03-.97-.27-.1-.48-.15-.68.15-.2.3-.78.97-.96 1.17-.18.2-.36.22-.66.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2 0-.37-.02-.52-.02-.14-.68-1.6-.93-2.18-.24-.57-.48-.5-.68-.51-.18-.01-.39-.01-.6-.01-.2 0-.53.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.45 1.07 2.85 1.22 3.05.15.2 2.1 3.22 5.08 4.52 2.98 1.3 2.98.87 3.52.82.54-.05 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.08-.12-.3-.2-.6-.35z" fill="currentColor"/>
              </svg>
            </span>
            <div className="contact-meta">
              <div className="contact-title">WhatsApp</div>
              <div className="contact-desc">+55 85 98210-3431</div>
            </div>
          </a>

          <a
            className="contact-card"
            href={emailUrl}
            aria-label="Enviar e-mail para ALGG"
          >
            <span className="contact-icon" aria-hidden="true">
              {/* Email SVG */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 7.5v9A2.5 2.5 0 0 0 6.5 19h11A2.5 2.5 0 0 0 20 16.5v-9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 7.5L12 13 3 7.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <div className="contact-meta">
              <div className="contact-title">E-mail</div>
              <div className="contact-desc">alggservicosimpressos@gmail.com</div>
            </div>
          </a>
        </div>

        <div className="contacts-bottom">
          <a className="footer-btn" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Pedir Orçamento</a>
        </div>
      </div>
    </section>
  );
}
