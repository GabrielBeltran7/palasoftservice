'use client'
import { useState } from 'react';

export default function Accordion1() {
  const [activeItem, setActiveItem] = useState(1);

  const handleClick = (index) => {
    setActiveItem(index);
  };

  return (
    <>
      <div className="accordion" id="accordion">
        
        {/* FAQ 1 */}
        <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".3s">
          <h5 className="accordion-header" onClick={() => handleClick(1)}>
            <button
              className={activeItem === 1 ? "accordion-button" : "accordion-button collapsed"}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq1"
              aria-expanded={activeItem === 1}
              aria-controls="faq1"
            >
              ¿Qué tipos de aplicaciones desarrollamos?
            </button>
          </h5>
          <div
            id="faq1"
            className={activeItem === 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}
            data-bs-parent="#accordion"
          >
            <div className="accordion-body">
              Desarrollamos aplicaciones móviles y web adaptadas a distintas necesidades, desde apps para negocios pequeños hasta plataformas más complejas, incluyendo comercio electrónico, educación, salud y servicios de gestión interna.
            </div>
          </div>
        </div>

        {/* FAQ 2 */}
        <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".5s">
          <h5 className="accordion-header" onClick={() => handleClick(2)}>
            <button
              className={activeItem === 2 ? "accordion-button" : "accordion-button collapsed"}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq2"
              aria-expanded={activeItem === 2}
              aria-controls="faq2"
            >
              ¿Qué tipo de ayuda ofrecemos a quienes quieren desarrollar su app?
            </button>
          </h5>
          <div
            id="faq2"
            className={activeItem === 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}
            data-bs-parent="#accordion"
          >
            <div className="accordion-body">
              Ofrecemos asesoría completa durante todo el proceso: desde la idea inicial, el diseño de la experiencia de usuario, el desarrollo técnico, hasta la publicación y mantenimiento de la aplicación.
            </div>
          </div>
        </div>

        {/* FAQ 3 */}
        <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".7s">
          <h5 className="accordion-header" onClick={() => handleClick(3)}>
            <button
              className={activeItem === 3 ? "accordion-button" : "accordion-button collapsed"}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq3"
              aria-expanded={activeItem === 3}
              aria-controls="faq3"
            >
              ¿Mi proyecto necesita ser grande para recibir apoyo?
            </button>
          </h5>
          <div
            id="faq3"
            className={activeItem === 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}
            data-bs-parent="#accordion"
          >
            <div className="accordion-body">
              No importa el tamaño de tu proyecto. Podemos ayudarte con ideas pequeñas o grandes. Lo más importante es tu interés en crear una aplicación útil, bien organizada y sostenible.
            </div>
          </div>
        </div>

        {/* FAQ 4 */}
        <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".9s">
          <h5 className="accordion-header" onClick={() => handleClick(4)}>
            <button
              className={activeItem === 4 ? "accordion-button" : "accordion-button collapsed"}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq4"
              aria-expanded={activeItem === 4}
              aria-controls="faq4"
            >
              ¿Cuánto tiempo toma desarrollar una aplicación?
            </button>
          </h5>
          <div
            id="faq4"
            className={activeItem === 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}
            data-bs-parent="#accordion"
          >
            <div className="accordion-body">
              El tiempo depende de la complejidad de la aplicación y de las funcionalidades requeridas. Para proyectos simples, puede tomar unas pocas semanas, mientras que aplicaciones más complejas pueden tardar varios meses.
            </div>
          </div>
        </div>

        {/* FAQ 5 */}
        <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay="1.1s">
          <h5 className="accordion-header" onClick={() => handleClick(5)}>
            <button
              className={activeItem === 5 ? "accordion-button" : "accordion-button collapsed"}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq5"
              aria-expanded={activeItem === 5}
              aria-controls="faq5"
            >
              ¿Se necesita experiencia técnica para iniciar mi app con ustedes?
            </button>
          </h5>
          <div
            id="faq5"
            className={activeItem === 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}
            data-bs-parent="#accordion"
          >
            <div className="accordion-body">
              No es necesario tener experiencia técnica. Nuestro equipo guía todo el proceso, desde la planificación hasta la publicación de la app, asegurando que cualquier persona pueda desarrollar su proyecto con éxito.
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}
