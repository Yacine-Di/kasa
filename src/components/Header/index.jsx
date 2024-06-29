import { Link } from 'react-router-dom'
import logo from '../../assets/header-logo.png'
import './index.scss'

function Header() {
    return (
        <header>
            <img src={logo} alt="logo de l'entreprise Kasa" />
            <nav>
                <Link to="/" className="link">
                    Accueil
                </Link>
                <Link to="/a-propos" className="link">
                    A Propos
                </Link>
            </nav>
        </header>
    )
}

export default Header
