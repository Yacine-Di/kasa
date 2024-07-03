import { useState } from 'react'
import topArrow from '../../assets/arrow-top.png'
import './index.scss'

function InfosAbout({ title, text }) {
    const [isTextInfoOpen, setDescription] = useState(false)
    let infosClasses = 'about about__background--lightgrey'
    let rotateArrow = 'about__arrow '
    let moreInfoClasses = 'about-more-container '
    let contentClasses = 'about-more-content '

    if (isTextInfoOpen) {
        rotateArrow += 'about__arrow--rotate__bot'
        contentClasses += 'about-more--show'
    }

    return (
        <article className={infosClasses}>
            <p
                className="about-title"
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
