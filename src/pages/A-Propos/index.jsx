import Infos from '../../components/Infos'
import './index.scss'
import { sizes } from '../../datas/infosSizes'
import { about } from '../../datas/apropos'

function APropos() {
    return (
        <main className="a-propos">
            <section className="background"></section>
            <article className="a-propos__infos">
                <Infos
                    title={about.fiabilite.name}
                    text={about.fiabilite.text}
                    size={sizes.large}
                />
                <Infos
                    title={about.respect.name}
                    text={about.respect.text}
                    size={sizes.large}
                />
                <Infos
                    title={about.service.name}
                    text={about.service.text}
                    size={sizes.large}
                />
                <Infos
                    title={about.securite.name}
                    text={about.securite.text}
                    size={sizes.large}
                />
            </article>
        </main>
    )
}

export default APropos
