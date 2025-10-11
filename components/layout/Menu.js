import Link from "next/link"
import { useState } from "react"

const MENU_ITEMS = [
    { href: "/", label: "Inicio" },
    { href: "/about", label: "Nosotros" },
    { href: "/service", label: "Servicios" },
    { href: "/project", label: "Proyectos" },
    { href: "/blog", label: "Blog" },
    { href: "/team", label: "Equipo" },
    { href: "/faq", label: "Preguntas Frecuentes" },
    { href: "/contact", label: "Contacto" },
]

export default function Menu() {
    const [activeDropdown, setActiveDropdown] = useState(null)

    const handleMouseEnter = (index) => setActiveDropdown(index)
    const handleMouseLeave = () => setActiveDropdown(null)

    return (
        <ul>
            {MENU_ITEMS.map((item, index) => {
                const hasChildren = Array.isArray(item.children)
                const isActive = hasChildren && activeDropdown === index

                return (
                    <li
                        key={item.label}
                        className={hasChildren ? "has-dropdown" : index === 0 ? "active" : ""}
                        onMouseEnter={hasChildren ? () => handleMouseEnter(index) : undefined}
                        onMouseLeave={hasChildren ? handleMouseLeave : undefined}
                    >
                        <Link href={item.href}>
                            {item.label}
                            {hasChildren && <i className="fas fa-angle-down ps-1" />}
                        </Link>

                        {hasChildren && (
                            <ul className="submenu" style={{ display: isActive ? "block" : "none" }}>
                                {item.children.map((child) => (
                                    <li key={child.label}>
                                        <Link href={child.href}>{child.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                )
            })}
        </ul>
    )
}
