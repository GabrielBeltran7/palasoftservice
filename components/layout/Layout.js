'use client'
import dynamic from "next/dynamic"
import Link from "next/link"
import Script from "next/script"
import { useEffect, useState } from "react"
import BackToTop from '../elements/BackToTop'
import Breadcrumb from './Breadcrumb'
import Offcanvas from "./Offcanvas"
import Search from "./Search"
import Footer1 from './footer/Footer1'
import Header1 from "./header/Header1"
import AOS from "aos"
import "aos/dist/aos.css"

const MouseCursor = dynamic(() => import("./MouseCursor"), {
  ssr: false,
  loading: () => null,
})

export default function Layout({ headerStyle, footerStyle, onePageNav, breadcrumbTitle, children }) {
  const [scroll, setScroll] = useState(0)
  const [isOffCanvas, setOffCanvas] = useState(false)
  const [isSearch, setSearch] = useState(false)

  const handleOffCanvas = () => setOffCanvas(!isOffCanvas)
  const handleSearch = () => setSearch(!isSearch)

  useEffect(() => {
    // Inicializa AOS
    AOS.init({
      duration: 1000,  // duración animación
      once: true,      // animar solo la primera vez
      easing: "ease-in-out",
    })

    const onScroll = () => {
      const scrollCheck = window.scrollY > 100
      setScroll(scrollCheck)
    }

    window.addEventListener("scroll", onScroll)

    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return (
    <>
      <Script
        src="https://cdn.emailjs.com/sdk/3.11.0/email.min.js"
        strategy="afterInteractive"
      />
      <MouseCursor />
      <Offcanvas isOffCanvas={isOffCanvas} handleOffCanvas={handleOffCanvas} />
      <Header1
        scroll={scroll}
        onePageNav={onePageNav}
        isOffCanvas={isOffCanvas}
        handleOffCanvas={handleOffCanvas}
        isSearch={isSearch}
        handleSearch={handleSearch}
      />
      <Search isSearch={isSearch} handleSearch={handleSearch} />

      {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

      {children}

      <Footer1 />
      <Link
        href="https://wa.me/573208903406?text=Hola%20Palasoft%20Services%2C%20me%20gustaría%20saber%20más%20sobre%20sus%20servicios."
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="Chatear por WhatsApp"
      >
        <i className="fab fa-whatsapp" />
      </Link>
      <Link
        href="tel:+573208903406"
        className="floating-call"
        aria-label="Llamar por teléfono"
      >
        <i className="fa-solid fa-phone" />
      </Link>
      <BackToTop />
    </>
  )
}
