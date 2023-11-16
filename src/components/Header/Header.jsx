import {React, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import SelectorIcon from '..//..//assets/selector.svg'
import UserIcon from '..//..//assets/User.svg'
import Hamburger_MDIcon from '..//..//assets/Hamburger_MD.svg'
import Logo from '..//..//assets/Logo.svg'
import './Header.css'
export default function Header() {

    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 720)
    const [isClickedHamburgerMenu, setisClickedHamburgerMenu] = useState(false)

    useEffect(() => {
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth <= 720)
      };
      window.addEventListener("resize", handleResize)
      return () => {
        window.removeEventListener("resize", handleResize)
      };
    }, []);

    const clickHamburgerHandler = () => {
        setisClickedHamburgerMenu(!isClickedHamburgerMenu)
    }


  return (
    <div>
       {!isSmallScreen && (
            <div>
                <header>
                    <div className="top-header">
                        <nav>
                            <ul>
                                <li><Link to="/about">About us</Link></li>
                                <li><Link to="/fag">FAQ</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/contact">Contact us</Link></li>
                            </ul>
                        </nav>
                        <select>
                            <option value="US">
                                <div>
                                <p>US$</p>
                                <img src={SelectorIcon} alt="SelectorIcon" />
                                </div>
                            </option>
                            <option value="AZ">
                                <div>
                                <p>AZ ₼</p>
                                <img src={SelectorIcon} alt="SelectorIcon" />
                                </div>
                            </option>
                            <option value="Rubl">
                                <div>
                                <p>Rubl ₽</p>
                                <img src={SelectorIcon} alt="SelectorIcon" />
                                </div>
                            </option>
                        </select>
                    </div>
                </header>
                <nav className="bottom-header">
                    <div id="bottom-header">
                        <ul>
                            <li><Link to="/destination">Destinations</Link></li>
                            <li>Private trips</li>
                        </ul>
                        <Link to="/"><img src={Logo} alt="logo" /></Link>
                        <div className="buttons">
                            <button className="feelingbtn">I'm Feeling Lucky</button>
                            <button className="loginbtn"><Link to="/signin">Login</Link></button>
                        </div>
                    </div>
                </nav>
            </div>
       )}
       {isSmallScreen && (
            <div>
                <nav className="bottom-header">
                    <div id="bottom-header">
                        <img src={Hamburger_MDIcon} alt="Hamburger_MDIcon" className='Hamburger_MDIcon' onClick={clickHamburgerHandler}/>
                        
                        <Link to="/"><img src={Logo} alt="logo" /></Link>
                        <div className="buttons">
                            <button className="loginbtn"><Link to="/signin"><img src={UserIcon} alt="UserIcon" /></Link></button>
                        </div>
                    </div>
                    <div className={isClickedHamburgerMenu ? "hamburger-active" : "hamburger-not-active"}>
                        <ul>
                            <li><Link to="/fag" onClick={clickHamburgerHandler}>FAQ</Link></li>
                            <li><Link to="/blog" onClick={clickHamburgerHandler}>Blog</Link></li>
                            <li><Link to="/about" onClick={clickHamburgerHandler}>About us</Link></li>
                            <li><Link to="/contact" onClick={clickHamburgerHandler}>Contact us</Link></li>
                            <li><Link to="/destination" onClick={clickHamburgerHandler}>Destinations</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )}
    </div>
  )
}
