import Link from "next/link"

export default function Footer1() {
    return (
        <>

            <footer className="footer-section">
                <div className="footer-widgets-wrapper footer-bg">
                    <div className="shape-1">
                        <img src="/assets/img/footer-shape-1.png" alt="shape-img" />
                    </div>
                    <div className="shape-2">
                        <img src="/assets/img/footer-shape-2.png" alt="shape-img" />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                <div className="single-footer-widget">
                                <div className="widget-head">
    <Link href="/">
      <img
        src="/assets/img/logo/logo.png"
        alt="logo Palasoft"
      />
    </Link>
    <h3>Palasoft Services</h3>
  </div>
                                    <div className="footer-content">
                                        <p>
                                            Palasoft Service es tu socio tecnológico confiable,
                                            ofreciendo soluciones innovadoras que transforman
                                            tu negocio hacia el futuro digital.
                                        </p>
                                        <div className="social-icon d-flex align-items-center">
                                            <Link href="#"><i className="fab fa-facebook-f" /></Link>
                                            <Link href="#"><i className="fab fa-twitter" /></Link>
                                            <Link href="#"><i className="fa-brands fa-linkedin-in" /></Link>
                                            <Link href="#"><i className="fa-brands fa-youtube" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".5s">
                                <div className="single-footer-widget text-white">
                                    <div className="widget-head">
                                        <h3>Soporte</h3>
                                        <ul className="footer-menu-list">
                                            <li>
                                                <Link href="/about" className="footer-link">Nosotros</Link>
                                            </li>
                                            <li>
                                                <Link href="/blog" className="footer-link">Blog</Link>
                                            </li>
                                            <li>
                                                <Link href="/project" className="footer-link">Proyectos</Link>
                                            </li>
                                            <li>
                                                <Link href="/service" className="footer-link">Servicios</Link>
                                            </li>
                                            <li>
                                                <Link href="/faq" className="footer-link">Preguntas Frecuentes</Link>
                                            </li>
                                            <li>
                                                <Link href="/contact" className="footer-link">Contacto</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-footer-widget text-white">
                                    <div className="widget-head">
                                        <div className="footer-logo">
                                            <img src="/assets/img/logo/black-logo.png" alt="logo-img" />
                                        </div>
                                    </div>
                                    <p className="desc text-white">
                                        Creamos soluciones digitales a la medida para impulsar la transformación y el crecimiento de tu negocio.
                                    </p>
                                    <div className="social-icon d-flex align-items-center text-white">
                                        <span className="text-white">Síguenos:</span>
                                        <Link href="#">
                                            <i className="fab fa-facebook-f" />
                                        </Link>
                                        <Link href="#">
                                            <i className="fab fa-twitter" />
                                        </Link>
                                        <Link href="#">
                                            <i className="fa-brands fa-linkedin-in" />
                                        </Link>
                                        <Link href="#">
                                            <i className="fa-brands fa-youtube" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="footer-wrapper d-flex align-items-center justify-content-between">
                            <p className="wow fadeInLeft color-2" data-wow-delay=".3s">
                                                                                © Todos los Derechos Reservados {new Date().getFullYear()} por <Link href="/">Palasoft Service</Link>
                            </p>
                            <ul className="footer-menu wow fadeInRight" data-wow-delay=".5s">
                                <li>
                                    <Link href="/contact">
                                        Términos y Condiciones
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        Política de Privacidad
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link href="#" id="scrollUp" className="scroll-icon">
                        <i className="far fa-arrow-up" />
                    </Link>
                </div>
            </footer>

        </>
    )
}
