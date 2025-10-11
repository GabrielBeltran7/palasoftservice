"use client";
import Link from "next/link";
import { useState } from "react";

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

export default function MobileMenu() {
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleItem = (index) => {
    setExpandedItem((current) => (current === index ? null : index));
  };

  return (
    <div className="mobile-menu fix mb-3 mean-container">
      <div className="mean-bar">
        <Link
          href="/#nav"
          className="meanmenu-reveal"
          style={{ right: 0, left: "auto", display: "inline" }}
        >
          <span>
            <span>
              <span />
            </span>
          </span>
        </Link>
        <nav className="mean-nav">
          <ul>
            {MENU_ITEMS.map((item, index) => {
              const hasChildren = Array.isArray(item.children);
              const isExpanded = expandedItem === index;

              return (
                <li
                  key={item.label}
                  className={
                    hasChildren
                      ? `has-dropdown ${isExpanded ? "mean-clicked" : ""}`
                      : index === 0
                        ? "active"
                        : index === MENU_ITEMS.length - 1
                          ? "mean-last"
                          : ""
                  }
                >
                  <Link href={item.href}>
                    {item.label}
                    {hasChildren && <i className="fas fa-angle-down" />}
                  </Link>

                  {hasChildren && (
                    <>
                      <ul className="submenu" style={{ display: isExpanded ? "block" : "none" }}>
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link href={child.href}>{child.label}</Link>
                          </li>
                        ))}
                      </ul>
                      <button
                        type="button"
                        className={`mean-expand ${isExpanded ? "mean-clicked" : ""}`}
                        onClick={() => toggleItem(index)}
                        aria-expanded={isExpanded}
                        aria-controls={`mobile-submenu-${index}`}
                      >
                        <i className="far fa-plus" />
                      </button>
                    </>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
