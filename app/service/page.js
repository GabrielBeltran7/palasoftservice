

import Accordion1 from "@/components/elements/Accordion1"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Service() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Servicios">
                <div>
                    <section className="service-section fix section-padding">
                        <div className="container">
                            <div className="section-title text-center">
                                <span className="wow fadeInUp">NUESTROS SERVICIOS</span>
                                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                    Proporcionamos la Mejor Calidad
                                </h2>
                            </div>
                            <div className="service-wrapper mb-0">
                                <div className="row">
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                        <div className="service-box-items box-shadow">
                                            <div className="icon">
                                                <img src="/assets/img/service/icon/s-icon-1.svg" alt="icon-img" />
                                            </div>
                                            <div className="content">
                                                <h4><Link href="/service-details/analisis-de-datos">Análisis de Datos</Link></h4>
                                                <p>Insights claros para decisiones estratégicas</p>
                                                <Link href="/service-details/analisis-de-datos" className="theme-btn-2 mt-3">Leer Más<i className="fa-solid fa-arrow-right-long" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                        <div className="service-box-items box-shadow">
                                            <div className="icon">
                                                <img src="/assets/img/service/icon/s-icon-4.svg" alt="icon-img" />
                                            </div>
                                            <div className="content">
                                                <h4><Link href="/service-details/desarrollo-web">Desarrollo de Páginas y Sitios Web</Link></h4>
                                                <p>Sitios rápidos, seguros y fáciles de gestionar</p>
                                                <Link href="/service-details/desarrollo-web" className="theme-btn-2 mt-3">Leer Más<i className="fa-solid fa-arrow-right-long" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                                        <div className="service-box-items box-shadow">
                                            <div className="icon">
                                                <img src="/assets/img/service/icon/s-icon-2.svg" alt="icon-img" />
                                            </div>
                                            <div className="content">
                                                <h4><Link href="/service-details/automatizacion">Automatización</Link></h4>
                                                <p>Automatiza procesos y reduce costos operativos</p>
                                                <Link href="/service-details/automatizacion" className="theme-btn-2 mt-3">Leer Más<i className="fa-solid fa-arrow-right-long" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".9s">
                                        <div className="service-box-items box-shadow">
                                            <div className="icon">
                                                <img src="/assets/img/service/icon/s-icon-4.svg" alt="icon-img" />
                                            </div>
                                            <div className="content">
                                                <h4><Link href="/service-details/apps-moviles">Desarrollo de Aplicaciones Móviles</Link></h4>
                                                <p>Apps a medida, seguras y escalables</p>
                                                <Link href="/service-details/apps-moviles" className="theme-btn-2 mt-3">Leer Más<i className="fa-solid fa-arrow-right-long" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                        <div className="service-box-items box-shadow">
                                            <div className="icon">
                                                <img src="/assets/img/service/icon/s-icon-1.svg" alt="icon-img" />
                                            </div>
                                            <div className="content">
                                                <h4><Link href="/service-details/seo">SEO</Link></h4>
                                                <p>Aumenta tu visibilidad y atrae más clientes</p>
                                                <Link href="/service-details/seo" className="theme-btn-2 mt-3">Leer Más<i className="fa-solid fa-arrow-right-long" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                        <div className="service-box-items box-shadow">
                                            <div className="icon">
                                                <img src="/assets/img/service/icon/s-icon-3.svg" alt="icon-img" />
                                            </div>
                                            <div className="content">
                                                <h4><Link href="/service-details/software-a-medida">Desarrollo de Software a la Medida</Link></h4>
                                                <p>Software a medida para tus objetivos</p>
                                                <Link href="/service-details/software-a-medida" className="theme-btn-2 mt-3">Leer Más<i className="fa-solid fa-arrow-right-long" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                                        <div className="service-box-items box-shadow">
                                            <div className="icon">
                                                <img src="/assets/img/service/icon/s-icon-3.svg" alt="icon-img" />
                                            </div>
                                            <div className="content">
                                                <h4><Link href="/service-details/diseno-ui-ux">Diseño UI/UX</Link></h4>
                                                <p>Diseños intuitivos y centrados en el usuario</p>
                                                <Link href="/service-details/diseno-ui-ux" className="theme-btn-2 mt-3">Leer Más<i className="fa-solid fa-arrow-right-long" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*<< Faq Section Start >>*/}
                  
                </div>

            </Layout>
        </>
    )
}