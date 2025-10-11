'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".dot-2",
        clickable: true,
    },
}

export default function Testimonial1() {
    return (
        <>
            <section className="testimonial-section section-padding fix">
                <div className="container">
                    <div className="testimonial-wrapper">
                        <div className="swiper testimonial-slider">
                            <Swiper {...swiperOptions} className="swiper-wrapper">
                                <SwiperSlide>
                                    <div className="testimonial-items">
                                        <div className="tesimonial-image bg-cover" style={{ backgroundImage: 'url("assets/img/testimonial/01.jpg")' }}>
                                            <div className="star">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                        </div>
                                        <div className="testimonial-content">
                                            <div className="section-title">
                                                <span>Testimonios</span>
                                                <h2>Lo Que Dicen Nuestros Colaboradores</h2>
                                            </div>
                                            <p className="mt-3 mt-md-0">
                                                Palasoft Service superó todas nuestras expectativas. Su equipo profesional nos ayudó a transformar completamente nuestra infraestructura tecnológica. La calidad del servicio y la atención al detalle son excepcionales. Recomendamos sus servicios sin dudarlo.
                                            </p>
                                            <div className="author-details">
                                                <h5>Ana María González</h5>
                                                <span>Directora de Marketing</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial-items">
                                        <div className="tesimonial-image bg-cover" style={{ backgroundImage: 'url("assets/img/testimonial/0103.png")' }}>
                                            <div className="star">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                        </div>
                                        <div className="testimonial-content">
                                            <div className="section-title">
                                                <span>Testimonios</span>
                                                <h2>Lo Que Dicen Nuestros Clientes</h2>
                                            </div>
                                            <p className="mt-3 mt-md-0">
                                                Excelente servicio técnico y soporte 24/7. Palasoft Service resolvió todos nuestros problemas de manera rápida y eficiente. Su experiencia en desarrollo web y aplicaciones móviles es impresionante. Definitivamente volveremos a trabajar con ellos.
                                            </p>
                                            <div className="author-details">
                                                <h5>Oscar León Castro</h5>
                                                <span>Director Cinica de Occidente</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial-items">
                                        <div className="tesimonial-image bg-cover" style={{ backgroundImage: 'url("assets/img/testimonial/0102.png")' }}>
                                            <div className="star">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                        </div>
                                        <div className="testimonial-content">
                                            <div className="section-title">
                                                <span>Testimonios</span>
                                                <h2>Lo Que Dicen Nuestros Colaboradores</h2>
                                            </div>
                                            <p className="mt-3 mt-md-0">
                                                La implementación de su solución de ciberseguridad fue impecable. Palasoft Service nos ayudó a proteger nuestros datos y sistemas de manera integral. Su equipo técnico es muy profesional y siempre está disponible cuando los necesitamos.
                                            </p>
                                            <div className="author-details">
                                                <h5>Ana Rodríguez</h5>
                                                <span>Gerente de IT</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial-items">
                                            <div className="tesimonial-image bg-cover" style={{ backgroundImage: 'url("assets/img/testimonial/0104.png")' }}>
                                                <div className="star">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                        </div>
                                        <div className="testimonial-content">
                                            <div className="section-title">
                                                <span>Testimonios</span>
                                                <h2>Lo Que Dicen Nuestros Clientes</h2>
                                            </div>
                                            <p className="mt-3 mt-md-0">
                                                Trabajar con Palasoft Service ha sido una experiencia increíble. Su consultoría en transformación digital nos permitió modernizar nuestros procesos y aumentar significativamente nuestra productividad. Son verdaderos expertos en tecnología.
                                            </p>
                                            <div className="author-details">
                                                <h5>Roberto Silva Cardona</h5>
                                                <span>Director de Operaciones</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="swiper-dot-2">
                            <div className="dot-2" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}