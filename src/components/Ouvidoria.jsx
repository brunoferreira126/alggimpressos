import "./Ouvidoria.css";
import useReveal from "../hooks/useReveal";
import { MessageCircle } from "lucide-react";

export default function Ouvidoria() {
  const revealRef = useReveal();

  return (
    <section className="ouvidoria-section" id="ouvidoria" ref={revealRef}>
      <div className="ouvidoria-container">
       <h2 className="ouvidoria-title">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    className="ouvidoria-icon"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 0 1-4.5-1.07L3 21l1.2-3.6A7.994 7.994 0 0 1 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8Z"
    />
  </svg>
  Ouvidoria
</h2>


        <p className="ouvidoria-text">
          Sua opinião é muito importante para nós! 💬  
          Caso tenha alguma <strong>sugestão, elogio ou reclamação</strong>, utilize nossa ouvidoria.  
          Queremos continuar melhorando para atender você cada vez melhor.
        </p>

        <a
          href="https://forms.gle/8EUT2KB1sFiumMik9"
          target="_blank"
          rel="noopener noreferrer"
          className="ouvidoria-button"
        >
          <MessageCircle className="ouvidoria-icon" />
          Acessar Formulário
        </a>
      </div>
    </section>
  );
}
