import { useState } from 'react'
import topArrow from '../../assets/arrow-top.png'
import './index.scss'

function InfosAbout({ title, text }) {
    const [isTextInfoOpen, setDescription] = useState(false)
    let infosClasses = 'infos infos__background--lightgrey'
    let rotateArrow = 'infos__arrow '
    let moreInfoClasses = 'infos-more-container '
    let contentClasses = 'infos-more-content '

    if (isTextInfoOpen) {
        rotateArrow += 'infos__arrow--rotate__bot'
        contentClasses += 'infos-more--show'
    }

    return (
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

export default InfosAbout
