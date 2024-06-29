import { useState } from 'react'
import topArrow from '../../assets/arrow-top.png'
import './index.scss'

function Infos({ categorie, text }) {
    const [isTextInfoOpen, setDescription] = useState(false)
    const [isEquipementOpen, setEquipement] = useState(false)
    let infosClass = 'infos '
    let rotateArrow = ''
    const titleInfo =
        categorie.toString().charAt(0).toUpperCase() +
        categorie.toString().slice(1)

    function handleDescriptionClick(test) {
        setDescription(!test)
    }

    function handleEquipementsClick() {
        setEquipement(!isEquipementOpen)
    }

    if (isTextInfoOpen || isEquipementOpen) {
        infosClass += 'infos__background--lightgrey'
        rotateArrow = 'infos__arrow-rotate__bot'
    }

    return categorie === 'equipements' ? (
        <article className={infosClass}>
            <p className="infos-title" onClick={handleEquipementsClick}>
                Équipements
                <span>
                    <img
                        className={rotateArrow}
                        src={topArrow}
                        alt="flèche indiquant si la description est ouverte ou fermée"
                    />
                </span>
            </p>
            {isEquipementOpen && (
                <ul className="infos-equipements">
                    {text.map((equipement) => (
                        <li className="infos-equipement" key={equipement}>
                            {equipement}
                        </li>
                    ))}
                </ul>
            )}
        </article>
    ) : (
        <article className={infosClass}>
            <p
                className="infos-title"
                onClick={() => handleDescriptionClick(isTextInfoOpen)}
            >
                {titleInfo}
                <img
                    className={rotateArrow}
                    src={topArrow}
                    alt="flèche indiquant si le détails est ouverte ou fermée"
                />
            </p>
            {isTextInfoOpen && <p className="infos-description">{text}</p>}
        </article>
    )
}

export default Infos
