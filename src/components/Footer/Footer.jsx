import {React} from 'react'
import {Link} from 'react-router-dom'
import Logo from '..//..//assets/Logo.svg'
import './Footer.css'
export default function Footer() {
  return (
    <footer>
        <div className="footer">
            <div className="footer-firstPart">
                <img src={Logo} alt="Logo" />
                <p className='discover'>Discover the world's wonders and let us be <br />your trusted guide to extraordinary destinations.</p>
                <p className='copyright'>© Copyright 2023 Tourista Ltd. All Rights Reserved.</p>
            </div>
            <div className="footer-secondPart part">
                <p>Menu</p>
                <ul>
                    <li><Link to="/destination">Destinations</Link></li>
                    <li>Private trips</li>
                    <li><Link to="/about">Blog</Link></li>
                    <li><Link to="/about">About us</Link></li>
                </ul>
            </div>
            <div className="footer-thirdPart part">
                <p>Support</p>
                <ul>
                    <li><Link to="/contact">Contact us</Link></li>
                    <li><Link to="/fag">FAQ</Link></li>
                    <li>Privacy Policy</li>
                    <li>Terms of Use</li>
                </ul>
            </div>
            <div className="footer-fourthPart part">
                <p>Follow us</p>
                <ul>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>Linkedin</li>
                    <li>Tiktok</li>
                </ul>
            </div>
        </div>
    </footer>
  )
}
