import { useState } from 'react'
import topArrow from '../../assets/arrow-top.png'
import './index.scss'

function Infos({ title, text }) {
    const [isTextInfoOpen, setDescription] = useState(false)
    const [isEquipementOpen, setEquipement] = useState(false)
    let infosClasses = 'infos infos__background--lightgrey'
    let rotateArrow = 'infos__arrow '
    let moreInfoClasses = 'infos-more-container '
    let contentClasses = 'infos-more-content '

    if (isTextInfoOpen || isEquipementOpen) {
        rotateArrow += 'infos__arrow--rotate__bot'
        contentClasses += 'infos-more--show'
    }

    return title === 'equipements' ? (
        <article className={infosClasses}>
            <p
                className="infos-title"
                onClick={() => setEquipement(!isEquipementOpen)}
            >
                Équipements
                <img
                    className={rotateArrow}
                    src={topArrow}
                    alt="flèche indiquant si le texte est ouverte ou fermée"
                />
            </p>
            <div className={moreInfoClasses}>
                <ul className={contentClasses}>
                    {text.map((equipement) => (
                        <li className="infos-equipement" key={equipement}>
                            {equipement}
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    ) : (
        <article className={infosClasses}>
            <p
                className="infos-title"
                onClick={() => setDescription(!isTextInfoOpen)}
            >
                {title}
                <img
                    className={rotateArrow}
                    src={topArrow}
                    alt="flèche indiquant si le détails est ouverte ou fermée"
                />
            </p>
            <div className={moreInfoClasses}>
                <p className={contentClasses}>{text}</p>
            </div>
        </article>
    )
}

export default Infos
