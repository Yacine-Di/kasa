import { Link } from 'react-router-dom'
import LogementCard from '../../components/LogementCard'
import logements from '../../datas/logements.json'
import './index.scss'

function Accueil() {
    return (
        <main>
            <section className="title__background">
                <h1>Chez vous, partout et ailleurs</h1>
            </section>
            <section className="logements">
                {logements.map((logement) => (
                    <Link
                        key={`logement-${logement.id}`}
                        to={`/logement/${logement.id}`}
                    >
                        <LogementCard
                            key={logement.id}
                            cover={logement.cover}
                            title={logement.title}
                        />
                    </Link>
                ))}
            </section>
        </main>
    )
}

export default Accueil
