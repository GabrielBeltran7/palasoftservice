'use client'
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".array-prev",
        prevEl: ".array-next",
    },

    breakpoints: {
        1199: {
            slidesPerView: 4,
        },
        991: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 2,
        },
        575: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        },
    },
}

export default function Service1() {
    return (
        <>
            <section className="service-section fix section-padding bg-cover" style={{ backgroundImage: 'url("assets/img/service/service-bg.jpg")' }}  id="service">
                <div className="container">
                    <div className="section-title-area">
                        <div className="section-title">
                            <span className="wow fadeInUp">Servicios de TI</span>
                            <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                Resolvemos Problemas de TI <br /> con Tecnología
                            </h2>
                        </div>
                        <div className="array-button">
                            <button className="array-prev"><i className="fal fa-arrow-right" /></button>
                            <button className="array-next"><i className="fal fa-arrow-left" /></button>
                        </div>
                    </div>
                    <div className="service-wrapper">
                        <div className="swiper service-slider">
                            <Swiper {...swiperOptions} className="swiper-wrapper">
                                
                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/service/icon/s-icon-1.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details/analisis-de-datos">Análisis de Datos</Link>
                                            </h4>
                                            <p>Insights claros para decisiones estratégicas</p>
                                            <Link href="/service-details/analisis-de-datos" className="theme-btn-2 mt-3">
                                                Leer Más
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                
                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/service/icon/s-icon-4.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details/desarrollo-web">Desarrollo de Páginas y Sitios Web</Link>
                                            </h4>
                                            <p>Sitios rápidos, seguros y fáciles de gestionar</p>
                                            <Link href="/service-details/desarrollo-web" className="theme-btn-2 mt-3">
                                                Leer Más
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                
                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/service/icon/s-icon-2.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details/automatizacion">Automatización</Link>
                                            </h4>
                                            <p>Automatiza procesos y reduce costos operativos</p>
                                            <Link href="/service-details/automatizacion" className="theme-btn-2 mt-3">
                                                Leer Más
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/service/icon/s-icon-4.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details/apps-moviles">Desarrollo de Aplicaciones Móviles</Link>
                                            </h4>
                                            <p>Apps a medida, seguras y escalables</p>
                                            <Link href="/service-details/apps-moviles" className="theme-btn-2 mt-3">
                                                Leer Más
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/service/icon/s-icon-1.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details/seo">SEO</Link>
                                            </h4>
                                            <p>Aumenta tu visibilidad y atrae más clientes</p>
                                            <Link href="/service-details/seo" className="theme-btn-2 mt-3">
                                                Leer Más
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/service/icon/s-icon-3.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details/software-a-medida">Desarrollo de Software a la Medida</Link>
                                            </h4>
                                            <p>Software a medida para tus objetivos</p>
                                            <Link href="/service-details/software-a-medida" className="theme-btn-2 mt-3">
                                                Leer Más
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/service/icon/s-icon-3.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details/diseno-ui-ux">Diseño UI/UX</Link>
                                            </h4>
                                            <p>Diseños intuitivos y centrados en el usuario</p>
                                            <Link href="/service-details/diseno-ui-ux" className="theme-btn-2 mt-3">
                                                Leer Más
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="service-text wow fadeInUp" data-wow-delay=".4s">
                            <h6>
                                ¿Necesitas alguna solución de TI para tu negocio?  <Link href="/service">Ver Servicios </Link>
                            </h6>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
