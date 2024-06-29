import { Link } from 'react-router-dom'
import './index.scss'

function Erreur() {
    return (
        <main>
            <p className="erreur">404</p>
            <p className="erreur__msg">
                Oups! La page que vous demandez n'existe pas.
            </p>
            <p className="redirect">
                <Link to="/">Retourner sur la page d’accueil</Link>
            </p>
        </main>
    )
}

export default Erreur
