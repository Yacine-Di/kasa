import Infos from '../../components/Infos'
import './index.scss'
import { about } from '../../datas/apropos'

function APropos() {
    return (
        <main className="a-propos">
            <section className="background"></section>
            <article className="a-propos__infos">
                <Infos
                    title={about.fiabilite.name}
                    text={about.fiabilite.text}
                />
                <Infos title={about.respect.name} text={about.respect.text} />
                <Infos title={about.service.name} text={about.service.text} />
                <Infos title={about.securite.name} text={about.securite.text} />
            </article>
        </main>
    )
}

export default APropos
