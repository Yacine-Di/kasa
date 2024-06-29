import './index.scss'

function LogementCard({ cover, title }) {
    return (
        <article className="carte-logement">
            <img src={cover} alt="cover du logement"></img>
            <h2>{title}</h2>
        </article>
    )
}

export default LogementCard
