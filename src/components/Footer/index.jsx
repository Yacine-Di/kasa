import logo from '../../assets/footer-logo.png'
import './index.scss'

function Footer() {
    return (
        <footer>
            <img src={logo} alt="logo de l'entreprise Kasa" />
            <p className="copyrights">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer
