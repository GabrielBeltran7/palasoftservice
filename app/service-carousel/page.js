'use client'
import Layout from "@/components/layout/Layout"
import BrandSlider1 from "@/components/slider/BrandSlider1"
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
    pagination: {
        el: ".dot-2",
        clickable: true,
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
export default function ServiceCarousel() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Servicios">
                <div>
                    <section className="service-section-3 fix section-padding">
                        <div className="container">
                            <div className="swiper service-slider-2">
                                <Swiper {...swiperOptions} className="swiper-wrapper">
                                    <SwiperSlide>
                                        <div className="service-card-items mt-0">
                                            <div className="service-image"><img src="/assets/img/service/02.jpg" alt="service-img" /></div>
                                            <div className="icon-2"><img src="/assets/img/service/icon/s-icon-1.svg" alt="img" /></div>
                                            <div className="service-content">
                                                <div className="icon"><img src="/assets/img/service/icon/s-icon-1.svg" alt="img" /></div>
                                                <h4><Link href="/service-details/analisis-de-datos">Análisis de Datos</Link></h4>
                                                <p>Insights claros para decisiones estratégicas</p>
                                                <Link href="/service-details/analisis-de-datos" className="theme-btn-2 mt-3">Leer Más<i className="fa-solid fa-arrow-right-long" /></Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="service-card-items mt-0">
                                            <div className="service-image"><img src="/assets/img/service/03.jpg" alt="service-img" /></div>
                                            <div className="icon-2"><img src="/assets/img/service/icon/s-icon-4.svg" alt="img" /></div>
                                            <div className="service-content">
                                                <div className="icon"><img src="/assets/img/service/icon/s-icon-4.svg" alt="img" /></div>
                                                <h4><Link href="/service-details/desarrollo-web">Desarrollo de Páginas y Sitios Web</Link></h4>
                                                <p>Sitios rápidos, seguros y fáciles de gestionar</p>
                                                <Link href="/service-details/desarrollo-web" className="theme-btn-2 mt-3">Leer Más<i className="fa-solid fa-arrow-right-long" /></Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="service-card-items mt-0">
                                            <div className="service-image"><img src="/assets/img/service/04.jpg" alt="service-img" /></div>
                                            <div className="icon-2"><img src="/assets/img/service/icon/s-icon-2.svg" alt="img" /></div>
                                            <div className="service-content">
                                                <div className="icon"><img src="/assets/img/service/icon/s-icon-2.svg" alt="img" /></div>
                                                <h4><Link href="/service-details/automatizacion">Automatización</Link></h4>
                                                <p>Automatiza procesos y reduce costos operativos</p>
                                                <Link href="/service-details/automatizacion" className="theme-btn-2 mt-3">Leer Más<i className="fa-solid fa-arrow-right-long" /></Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="service-card-items mt-0">
                                            <div className="service-image"><img src="/assets/img/service/05.jpg" alt="service-img" /></div>
                                            <div className="icon-2"><img src="/assets/img/service/icon/s-icon-4.svg" alt="img" /></div>
                                            <div className="service-content">
                                                <div className="icon"><img src="/assets/img/service/icon/s-icon-4.svg" alt="img" /></div>
                                                <h4><Link href="/service-details/apps-moviles">Desarrollo de Aplicaciones Móviles</Link></h4>
                                                <p>Apps a medida, seguras y escalables</p>
                                                <Link href="/service-details/apps-moviles" className="theme-btn-2 mt-3">Leer Más<i className="fa-solid fa-arrow-right-long" /></Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="service-card-items mt-0">
                                            <div className="service-image"><img src="/assets/img/service/02.jpg" alt="service-img" /></div>
                                            <div className="icon-2"><img src="/assets/img/service/icon/s-icon-1.svg" alt="img" /></div>
                                            <div className="service-content">
                                                <div className="icon"><img src="/assets/img/service/icon/s-icon-1.svg" alt="img" /></div>
                                                <h4><Link href="/service-details/seo">SEO</Link></h4>
                                                <p>Aumenta tu visibilidad y atrae más clientes</p>
                                                <Link href="/service-details/seo" className="theme-btn-2 mt-3">Leer Más<i className="fa-solid fa-arrow-right-long" /></Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="service-card-items mt-0">
                                            <div className="service-image"><img src="/assets/img/service/03.jpg" alt="service-img" /></div>
                                            <div className="icon-2"><img src="/assets/img/service/icon/s-icon-3.svg" alt="img" /></div>
                                            <div className="service-content">
                                                <div className="icon"><img src="/assets/img/service/icon/s-icon-3.svg" alt="img" /></div>
                                                <h4><Link href="/service-details/software-a-medida">Desarrollo de Software a la Medida</Link></h4>
                                                <p>Software a medida para tus objetivos</p>
                                                <Link href="/service-details/software-a-medida" className="theme-btn-2 mt-3">Leer Más<i className="fa-solid fa-arrow-right-long" /></Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="service-card-items mt-0">
                                            <div className="service-image"><img src="/assets/img/service/04.jpg" alt="service-img" /></div>
                                            <div className="icon-2"><img src="/assets/img/service/icon/s-icon-3.svg" alt="img" /></div>
                                            <div className="service-content">
                                                <div className="icon"><img src="/assets/img/service/icon/s-icon-3.svg" alt="img" /></div>
                                                <h4><Link href="/service-details/diseno-ui-ux">Diseño UI/UX</Link></h4>
                                                <p>Diseños intuitivos y centrados en el usuario</p>
                                                <Link href="/service-details/diseno-ui-ux" className="theme-btn-2 mt-3">Leer Más<i className="fa-solid fa-arrow-right-long" /></Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                                <div className="swiper-dot-2">
                                    <div className="dot-2" />
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Brand Section Start */}
                    <div className="brand-section fix section-padding pt-0 mt-5">
                        <div className="container">
                            <div className="brand-wrapper">
                                <h6 className="text-center wow fadeInUp" data-wow-delay=".3s">Más de 250 marcas confían en nosotros</h6>
                                <BrandSlider1 />
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}