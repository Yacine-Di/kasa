import Infos from '../../components/Infos'
import './index.scss'
import { about } from '../../datas/apropos'

function APropos() {
    return (
        <main className="a-propos">
            <section className="background"></section>
            <article className="a-propos__infos">
                <div className="a-propos__infos--resize">
                    <Infos
                        title={about.fiabilite.name}
                        text={about.fiabilite.text}
                    />
                </div>
                <div className="a-propos__infos--resize">
                    <Infos
                        title={about.respect.name}
                        text={about.respect.text}
                    />
                </div>
                <div className="a-propos__infos--resize">
                    <Infos
                        title={about.service.name}
                        text={about.service.text}
                    />
                </div>
                <div className="a-propos__infos--resize">
                    <Infos
                        title={about.securite.name}
                        text={about.securite.text}
                    />
                </div>
            </article>
        </main>
    )
}

export default APropos
