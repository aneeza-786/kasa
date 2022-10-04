import { Link } from 'react-router-dom'
import "../styles/Error.css";

function Error() {
    return (
        <div className='error'>
            <h1 className='error-nmbr'>404</h1>
            <p className='Error-txt'>Oups! La page que vous demandez n'existe pas.</p>
            <Link to=".." className='link'>Retourner sur la page d'acceuil</Link>
        </div>
    )
}
 
export default Error