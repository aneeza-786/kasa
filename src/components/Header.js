import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/about">A propos</Link></li>
                </ul>    
            </nav>
        </div>
    )
}

export default Header