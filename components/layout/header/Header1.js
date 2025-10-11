import Link from "next/link";
import dynamic from "next/dynamic";

const Menu = dynamic(() => import("../Menu"), {
  ssr: false,
  loading: () => null,
});

const OnePageNav = dynamic(() => import("../OnePageNav"), {
  ssr: false,
  loading: () => null,
});

export default function Header1({
  scroll,
  isOffCanvas,
  handleOffCanvas,
  isSearch,
  handleSearch,
  onePageNav,
}) {
  return (
    <>
      <header>
        <div className="header-top-section fix">
          <div className="container-fluid">
            <div className="header-top-wrapper">
              <ul className="contact-list">
                <li >
                  <i className="far fa-envelope" />
                  <Link
                    href="/mailto:Palasoftservices@gmail.com"
                    className="link"
                  >
                    Palasoftservices@gmail.com
                  </Link>
                </li>
                <li className="fa-solid fa-phone-volume" />
      
                <Link
                  href="https://wa.me/573208903406?text=Hola%20Palasoft%20Services%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios."
                  target="_blank"
                  rel="noopener noreferrer"
      className="text-white hover:text-green-400"
                >
                  +57 320 8903406
                </Link>{" "}
              </ul>
              <div className="top-right">
                <div className="social-icon d-flex align-items-center">
                  <span>Síguenos:</span>
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
        <div
          id="header-sticky"
          className={`header-1 ${scroll ? "sticky" : ""}`}
        >
          <div className="container-fluid">
            <div className="mega-menu-wrapper">
              <div className="header-main style-2">
                <div className="header-left">
                  <div className="logo">
                    <Link href="/" className="header-logo">
                      <img
                        src="/assets/img/logo/black-logo.png"
                        alt="logo-img"
                      />
                    </Link>
                  </div>
                </div>
                <div className="header-right d-flex justify-content-end align-items-center">
                  <div className="mean__menu-wrapper">
                    <div className="main-menu">
                      <nav id="mobile-menu">
                        {onePageNav ? <OnePageNav /> : <Menu />}
                      </nav>
                    </div>
                  </div>
                  <a
                    onClick={handleSearch}
                    className="search-trigger search-icon"
                  >
                    <i className="fal fa-search" />
                  </a>
                  <div className="header-button">
                    <Link href="/contact" className="theme-btn">
                      <span>
                        Obtener Cotización
                        <i className="fa-solid fa-arrow-right-long" />
                      </span>
                    </Link>
                  </div>
                  <div className="header__hamburger d-xl-block my-auto">
                    <div className="sidebar__toggle" onClick={handleOffCanvas}>
                      <i className="fas fa-bars" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
