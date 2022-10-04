import logo from '../assets/logo.png'
import '../styles/Header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <nav className='header-nav'>
                <img src={logo} alt='logo Kasa' className='kasa-logo' />
                <ul className='ul-nav'>
                    <li className='li-nav'><Link to="" className='link'>Accueil</Link></li>
                    <li className='li-nav'><Link to="/about" className='link'>A propos</Link></li>
                </ul>    
            </nav>
        </div>
    )
}

export default Header