import { useState } from 'react'
import arrowBack from '../../assets/arrow-back.png'
import arrowNext from '../../assets/arrow-next.png'
import './index.scss'

function Slides({ pictures }) {
    let [actualPicture, setActualPicture] = useState(0)

    return (
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
        </article>
    )
}

export default Slides
