import Link from 'next/link';
import VideoPopup from '../elements/VideoPopup';
import CounterUp from '../elements/CounterUp';

const iconItems = [
  {
    icon: '/assets/img/about/icon-2.svg',
    title: 'Resolución de Problemas',
    text: 'Solucionamos desafíos tecnológicos complejos',
    delay: '.7s',
  },
  {
    icon: '/assets/img/about/icon-3.svg',
    title: 'Misión y Visión',
    text: 'Innovación constante para el futuro digital',
    delay: '.9s',
  },
];

export default function About1() {
  return (
    <section className="about-section section-padding fix" id="about">
      <div className="container">
        <div className="about-wrapper">
          <div className="row">
            {/* Imagen y video */}
            <div className="col-lg-6">
              <div className="about-image-items">
                <div className="counter-shape float-bob-y">
                  <div className="icon">
                    <img src="/assets/img/about/icon-1.svg" alt="icon-img" />
                  </div>
                  <div className="content">
                    <h3>
                      <CounterUp count={6561} />+
                    </h3>
                  </div>
                </div>

                <VideoPopup style={2} />

                <div
                  className="about-image-1 bg-cover wow fadeInLeft"
                  data-wow-delay=".3s"
                  style={{ backgroundImage: 'url("assets/img/about/01.jpg")' }}
                >
                  <div className="about-image-2 wow fadeInUp" data-wow-delay=".5s">
                    <img src="/assets/img/about/02.jpg" alt="about-img" />
                  </div>
                </div>
              </div>
            </div>

            {/* Contenido */}
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="about-content">
                <div className="section-title">
                  <span className="wow fadeInUp">ACERCA DE PALASOFT SERVICE</span>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    Estamos Aumentando el Éxito Empresarial con <span>Tecnología</span>
                  </h2>
                </div>

                <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                  Somos especialistas en transformación digital, ofreciendo soluciones tecnológicas innovadoras que impulsan el crecimiento y la competitividad de tu empresa.
                </p>

                <div className="about-icon-items">
                  {iconItems.map((item, index) => (
                    <div className="icon-items wow fadeInUp" data-wow-delay={item.delay} key={index}>
                      <div className="icon">
                        <img src={item.icon} alt="icon-img" />
                      </div>
                      <div className="content">
                        <h4>{item.title}</h4>
                        <p>{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="about-author">
                  <div className="about-button wow fadeInUp" data-wow-delay=".5s">
                    <Link href="/about" className="theme-btn">
                      Explorar Más
                      <i className="fa-solid fa-arrow-right-long" />
                    </Link>
                  </div>

                  <div className="author-image wow fadeInUp" data-wow-delay=".7s">
                    <img src="/assets/img/about/author.png" alt="author-img" />
                    <div className="content">
                      <h6>Cristian Camilo Triana Mendoza</h6>
                      <p>Cofundador</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
