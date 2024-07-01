import { useParams } from 'react-router-dom'
import logements from '../../datas/logements.json'
import './index.scss'
import Slides from '../../components/Slides'
import StarRate from '../../components/StarRate'
import Infos from '../../components/Infos'
import { sizes } from '../../datas/infosSizes'

function Logement() {
    const { id } = useParams()
    const {
        title,
        pictures,
        description,
        host,
        rating,
        location,
        equipments,
        tags,
    } = logements.find((logement) => logement.id === id)

    return (
        <main className="logement">
            <Slides pictures={pictures} />
            <article className="presentation">
                <article className="title__location__tags">
                    <h1 className="title">{title}</h1>
                    <p className="location">{location}</p>
                    <ul className="tags">
                        {tags.map((tag) => (
                            <li className="tag" key={`${id}-${tag}`}>
                                {tag}
                            </li>
                        ))}
                    </ul>
                </article>
                <article>
                    <article className="hote-infos">
                        <p className="hote-name">{host.name}</p>
                        <img
                            className="hote-picture"
                            src={host.picture}
                            alt={host.name}
                        />
                    </article>
                    <StarRate rating={rating} />
                </article>
            </article>
            <article className="description__equipements">
                <Infos
                    title="Description"
                    text={description}
                    size={sizes.medium}
                />
                <Infos
                    title="equipements"
                    text={equipments}
                    size={sizes.medium}
                />
            </article>
        </main>
    )
}

export default Logement
