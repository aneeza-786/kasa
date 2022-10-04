import '../styles/Footer.css';
import footerLogo from "../assets/logo-footer.png"

function Footer() {
    return (
            <footer className='footer'>
                <div className='footer-logo'>
                    <img src={footerLogo} alt="Logo footer" className='footer-logo' />
                </div>
                <p className='footer-text'>© 2022 Kasa. All rights reserved</p>
            </footer>
)}

export default Footer