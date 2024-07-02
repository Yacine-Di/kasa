import { Link } from 'react-router-dom'
import logo from '../../assets/header-logo.png'
import './index.scss'
import { useState } from 'react'

function Header() {
    const [isHomeActive, setHomeActive] = useState(true)
    const [isAboutActive, setAboutActive] = useState(false)

    let homeLinkClasses = isHomeActive ? 'link link--active' : 'link'
    let aboutLinkClasses = isAboutActive ? 'link link--active' : 'link'

    return (
        <header>
            <img src={logo} alt="logo de l'entreprise Kasa" />
            <nav>
                <Link
                    to="/"
                    className={homeLinkClasses}
                    onClick={() => {
                        setHomeActive((isHomeActive) => (isHomeActive = true))
                        setAboutActive(
                            (isAboutActive) => (isAboutActive = false)
                        )
                    }}
                >
                    Accueil
                </Link>
                <Link
                    to="/a-propos"
                    className={aboutLinkClasses}
                    onClick={() => {
                        setHomeActive((isHomeActive) => (isHomeActive = false))
                        setAboutActive(
                            (isAboutActive) => (isAboutActive = true)
                        )
                    }}
                >
                    A Propos
                </Link>
            </nav>
        </header>
    )
}

export default Header
