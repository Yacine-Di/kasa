import InfosAbout from '../../components/InfosAbout'
import './index.scss'
import { about } from '../../datas/apropos'

function APropos() {
    return (
        <main className="a-propos">
            <section className="background"></section>
            <article className="a-propos__infos">
                <InfosAbout
                    title={about.fiabilite.name}
                    text={about.fiabilite.text}
                />
                <InfosAbout
                    title={about.respect.name}
                    text={about.respect.text}
                />
                <InfosAbout
                    title={about.service.name}
                    text={about.service.text}
                />
                <InfosAbout
                    title={about.securite.name}
                    text={about.securite.text}
                />
            </article>
        </main>
    )
}

export default APropos
