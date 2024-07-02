import { Link } from 'react-router-dom'
import './index.scss'

function Erreur() {
    return (
        <main className="erreur">
            <p className="erreur__number">404</p>
            <p className="erreur__msg">
                Oups! La page que vous demandez n'existe pas.
            </p>
            <p className="redirect">
                <Link className="redirect__link" to="/">
                    Retourner sur la page d’accueil
                </Link>
            </p>
        </main>
    )
}

export default Erreur
