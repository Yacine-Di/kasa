import fullstar from '../../assets/star-active.png'
import emptystar from '../../assets/star-inactive.png'

function StarRate({ rating }) {
    const rate = []

    for (let i = 1; i <= 5; i++) {
        rate.push(
            parseInt(rating) >= i ? (
                <img key={`rate-${i}`} src={fullstar} alt="fullstar" />
            ) : (
                <img key={`rate-${i}`} src={emptystar} alt="emptystar" />
            )
        )
    }

    return <article>{rate}</article>
}

export default StarRate
