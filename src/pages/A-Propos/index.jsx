import Infos from '../../components/Infos'
import './index.scss'

function APropos() {
    return (
        <main className="a-propos">
            <section className="background"></section>
            <article className="a-propos__infos">
                <Infos categorie="fiabilite" text="" />
                <Infos categorie="respect" text="" />
                <Infos categorie="service" text="" />
                <Infos categorie="securite" text="" />
            </article>
        </main>
    )
}

export default APropos
