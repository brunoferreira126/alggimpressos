import { useEffect, useRef } from "react";
import "./Testimonials.css";
import useReveal from "../hooks/useReveal";

// importa as imagens locais (1.png ... 7.png)
import img1 from "../assets/testimonials/1.png";
import img2 from "../assets/testimonials/2.png";
import img3 from "../assets/testimonials/3.png";
import img4 from "../assets/testimonials/4.png";
import img5 from "../assets/testimonials/5.png";
import img6 from "../assets/testimonials/6.png";
import img7 from "../assets/testimonials/7.png";

const images = [img1, img2, img3, img4, img5, img6, img7];

function TestimonialCard({ img, index }) {
  const cardRef = useReveal();

  return (
    <div
      ref={cardRef}
      className="testimonial-card reveal fade-up"
      aria-label={`Depoimento ${index + 1}`}
      role="group"
    >
      <img
        src={img}
        alt={`Cliente ${index + 1}`}
        className="testimonial-photo"
        loading="lazy"
        width="420"
        height="420"
      />
    </div>
  );
}

export default function Testimonials() {
  const carouselRef = useRef(null);
  const titleRef = useReveal();

  useEffect(() => {
    const box = carouselRef.current;
    if (!box) return;

    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % images.length;
      box.scrollTo({
        left: index * box.clientWidth,
        behavior: "smooth",
      });
    }, 3500); // intervalo de 3.5s — ajuste se quiser mais lento/rápido

    // impedir scroll automático em mobile quando usuário interage: opcional
    const onTouchStart = () => clearInterval(interval);
    box.addEventListener("touchstart", onTouchStart);

    return () => {
      clearInterval(interval);
      box.removeEventListener("touchstart", onTouchStart);
    };
  }, []);

  return (
    <section
      className="testimonials-section"
      id="depoimentos"
      aria-labelledby="testimonials-title"
    >
      <div className="bg-shape shape1" aria-hidden="true"></div>
      <div className="bg-shape shape2" aria-hidden="true"></div>

      <div className="testimonials-container">
        <h2 ref={titleRef} id="testimonials-title" className="testimonials-title reveal">
          O que nossos <span>clientes dizem</span>
        </h2>

        <div ref={carouselRef} className="testimonials-carousel" role="list">
          {images.map((img, i) => (
            <div role="listitem" key={i}>
              <TestimonialCard img={img} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
