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
export default function TeamCarousel() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Equipo">
                <div>
                    <section className="team-section-4 fix section-padding">
                        <div className="container">
                            <div className="swiper team-slider">
                                <Swiper {...swiperOptions} className="swiper-wrapper">
                                    <SwiperSlide>
                                        <div className="single-team-items mt-0">
                                            <div className="team-image">
                                                <img src="/assets/img/team/01.jpg" alt="team-img" />
                                            </div>
                                            <div className="team-content text-center">
                                                <h3><Link href="/team-details">Cistian Camilo Mendoza</Link></h3>
                                                <p>Cofundador — Líder visionario y estratega de transformación digital.</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="single-team-items mt-0">
                                            <div className="team-image">
                                                <img src="/assets/img/team/02.jpg" alt="team-img" />
                                            </div>
                                            <div className="team-content text-center">
                                                <h3><Link href="/team-details">Pedro Nel Rincon</Link></h3>
                                                <p>Cofundador — Especialista en desarrollo y arquitectura de sistemas.</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="single-team-items mt-0">
                                            <div className="team-image">
                                                <img src="/assets/img/team/03.jpg" alt="team-img" />
                                            </div>
                                            <div className="team-content text-center">
                                                <h3><Link href="/team-details">Gabriel Beltran Medina</Link></h3>
                                                <p>Ing. Desarrollo y UI/UX Designer — Experto en software y experiencia de usuario.</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="single-team-items mt-0">
                                            <div className="team-image">
                                                <img src="/assets/img/team/04.jpg" alt="team-img" />
                                            </div>
                                            <div className="team-content text-center">
                                                <h3><Link href="/team-details">Darwin</Link></h3>
                                                <p>Experto Comercial — Estrategias comerciales y desarrollo de negocios.</p>
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