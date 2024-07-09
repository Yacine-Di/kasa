import { useState } from 'react'
import arrowBack from '../../assets/arrow-back.png'
import arrowNext from '../../assets/arrow-next.png'
import './index.scss'

function Slides({ pictures }) {
    let [actualPicture, setActualPicture] = useState(0)

    return pictures.length === 1 ? (
        <article className="slides">
            <img
                className="slides__picture"
                src={pictures[actualPicture]}
                alt={`logement ${pictures[actualPicture]} / ${pictures.length}`}
            />
        </article>
    ) : (
        <article className="slides">
            <img
                onClick={() =>
                    setActualPicture(
                        (actualPicture =
                            actualPicture === 0
                                ? pictures.length - 1
                                : actualPicture - 1)
                    )
                }
                className="slides__arrow slides__arrow--left"
                src={arrowBack}
                alt="previous media"
            />
            <img
                className="slides__picture"
                src={pictures[actualPicture]}
                alt={`logement ${pictures[actualPicture]} / ${pictures.length}`}
            />
            <img
                onClick={() =>
                    setActualPicture(
                        (actualPicture =
                            actualPicture === pictures.length - 1
                                ? 0
                                : actualPicture + 1)
                    )
                }
                className="slides__arrow slides__arrow--right"
                src={arrowNext}
                alt="next media"
            />
            <p className="slides__count">
                {actualPicture + 1}/{pictures.length}
            </p>
        </article>
    )
}

export default Slides
