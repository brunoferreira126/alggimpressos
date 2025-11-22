import "./Location.css";
import useReveal from "../hooks/useReveal";

export default function Location() {
  // Refs de animação
  const titleRef = useReveal();
  const mapRef = useReveal();
  const infoRef = useReveal();

  return (
    <section className="location-section" id="localizacao">
      {/* Shapes do fundo */}
      <div className="bg-shape shape1"></div>
      <div className="bg-shape shape2"></div>

      <div className="location-container">
        
        {/* TÍTULO */}
        <h2 className="location-title fade-up" ref={titleRef}>
          Nossa <span>Localização</span>
        </h2>

        <div className="location-content">
          
          {/* MAPA */}
          <div className="location-map fade-left" ref={mapRef}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.94046079821!2d-38.30352542429035!3d-4.03257204479662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b89f4f52ffcb61%3A0x9bdefa92dc28c77b!2sALGG%20Servi%C3%A7os%20Impressos!5e0!3m2!1spt-BR!2sbr!4v1763435307128!5m2!1spt-BR!2sbr"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* INFORMAÇÕES */}
          <div className="location-info fade-right" ref={infoRef}>
            <h3>Venha nos visitar!</h3>

            <p>
              <strong>📍 Endereço:</strong><br />
              Rua José Rubens de Alcântara, nº 92<br />
              Morada Nova – CE
            </p>

            <p>
              <strong>⏰ Horário de Funcionamento:</strong><br />
              Segunda a Sexta: 08h às 17h<br />
              Sábado: 08h às 12h
            </p>

            <a
              href="https://wa.me/5585989834"
              target="_blank"
              className="location-btn"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
