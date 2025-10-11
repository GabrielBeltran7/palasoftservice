import VideoPopup from "@/components/elements/VideoPopup";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { notFound } from "next/navigation";
import services from "@/data/services";
import { getServiceBySlug } from "@/data/services";
import Accordion1 from "@/components/elements/Accordion1";

export default async function ServiceDetails({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <Layout headerStyle={1} footerStyle={2} breadcrumbTitle={service.title}>
      <section className="service-details-section fix section-padding">
        <div className="container">
          <div className="service-details-wrapper">
            <div className="row g-4">
              <div className="col-12 col-lg-4 order-2 order-lg-1">
                <aside className="main-sidebar">
                  <div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h3>Todos los Servicios</h3>
                    </div>
                    <div className="widget-categories">
                      <ul>
                        {services.map((item) => (
                          <li
                            key={item.slug}
                            className={
                              item.slug === service.slug ? "active" : ""
                            }
                          >
                            <Link href={`/service-details/${item.slug}`}>
                              {item.title}
                            </Link>
                            <i className="fa-solid fa-arrow-right-long" />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h3>Horario de Atención</h3>
                    </div>
                    <div className="opening-category">
                      <ul>
                        <li>
                          <i className="fa-regular fa-clock" />
                          Lun - Sáb: 7:00 AM - 6:00 PM
                        </li>
                        <li>
                          <i className="fa-regular fa-clock" />
                          Dom: 9:00 AM - 4:00 PM
                        </li>

                        <li>
                          <i className="fa-regular fa-clock" />
                          Emergencias: 24 horas
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="single-sidebar-image bg-cover"
                    style={{
                      backgroundImage: 'url("/assets/img/service/post.jpg")',
                    }}
                  >
                    <a
  href="https://wa.me/573208903406"
  target="_blank"
  rel="noopener noreferrer"
  style={{ textDecoration: 'none', color: 'inherit' }}
>
  <div className="contact-text">
    <div className="icon">
      <i className="fa-solid fa-phone" />
    </div>
    <h4>¿Necesitas ayuda? Llámanos</h4>
    <h5>+57 320 8903406</h5>
  </div>
</a>
                  </div>
                </aside>
              </div>
              <div className="col-12 col-lg-8 order-1 order-lg-2">
                <article className="service-details-items">
                  <div className="details-image">
                    <img src={service.heroImage} alt={service.title} />
                  </div>
                  <div className="details-content">
                    <h3>{service.title}</h3>
                    <p className="mt-3">{service.overview}</p>
                    <div className="details-video-items">
                      <div className="video-thumb">
                        <img
                          src="/assets/img/service/details-video.jpg"
                          alt="video"
                        />
                        <VideoPopup style={1} />
                      </div>
                      <div className="content">
                        <h4>Beneficios de este servicio</h4>
                        <ul className="list">
                          {service.benefits.map((benefit) => (
                            <li key={benefit}>
                              <i className="fa-regular fa-circle-check" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <h3 className="mt-5">Preguntas Frecuentes</h3>
                    <p className="mt-3">
                      Hemos seleccionado las dudas más comunes que recibimos
                      para ayudarte a entender mejor este servicio. Si necesitas
                      más información, contáctanos y nuestro equipo te
                      asesorará.
                    </p>
                    <div className="faq-content style-3">
                      <div className="faq-accordion">
                        <Accordion1 />
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
