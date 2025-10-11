import { useEffect, useState } from "react"

const THEME_KEY = "togglETHeme"
const DEFAULT_THEME = "light-theme"

export default function ThemeSwitch() {
    const [theme, setTheme] = useState(DEFAULT_THEME)

    useEffect(() => {
        if (typeof window === "undefined") {
            return
        }

        try {
            const storedTheme = window.localStorage.getItem(THEME_KEY)
            if (storedTheme) {
                setTheme(JSON.parse(storedTheme))
            }
        } catch (error) {
            console.warn("No fue posible recuperar el tema desde localStorage.", error)
        }
    }, [])

    useEffect(() => {
        if (typeof window === "undefined") {
            return
        }

        try {
            window.localStorage.setItem(THEME_KEY, JSON.stringify(theme))
        } catch (error) {
            console.warn("No fue posible guardar el tema en localStorage.", error)
        }

        document.body.classList.remove("light-theme", "dark-theme")
        document.body.classList.add(theme)

        return () => {
            document.body.classList.remove(theme)
        }
    }, [theme])

    const toggleTheme = () => {
        setTheme(current => current === "light-theme" ? "dark-theme" : "light-theme")
    }

    return (
        <nav className="switcher__tab" onClick={toggleTheme}>
            <span className="switcher__btn light-mode"><i className="flaticon-sun" /></span>
            <span className="switcher__mode" />
            <span className="switcher__btn dark-mode"><i className="flaticon-moon" /></span>
        </nav>
    )
}
