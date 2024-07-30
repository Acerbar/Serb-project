import logo from "/logo.jpg"
import flag from "/SerbiaFlag.svg"
import './header.css'
import MobileNav from "../mobileNav/mobileNav"
import { useState, useEffect } from "react"
import { NavLink, useLocation } from "react-router-dom"


export default function Header(){
    const [isFixed, setIsFixed] = useState(false);
        useEffect(() => {
            const handleScroll = () => {
              if (window.scrollY > 50) {
                setIsFixed(true);
              } else {
                setIsFixed(false);
              }
            };
        
            window.addEventListener('scroll', handleScroll);
            
            return () => {
              window.removeEventListener('scroll', handleScroll);
            };
          }, []);

        const scrollToSection = (selector) => {
            const section = document.querySelector(selector);
            if (section) {
              section.scrollIntoView({ behavior: 'smooth' });
            }
          };
    return (
        <>
        <header className={isFixed ? "header_fixed" : ""}>
            <div className={ isFixed ? "header-inner container" : "header-inner header-inner_no-logo container"}>
              <div className="header-inner-left">
                  <div className={isFixed ? "header__logo" : "header__logo_hidden"}>
                    <a className="header-nav__link" onClick={() => scrollToSection('.intro')}>
                      <img src={logo} alt="logo" />
                    </a>
                  </div>
                  <a className="lang-change">
                    <img src={flag} alt="" />
                    <p className="lang-link">Srpska</p>
                  </a>
              </div>
                <div className="header-inner__content">
                    <nav className="header-nav">
                      <a className="header-nav__link" id="nav-link-one" onClick={() => scrollToSection('.preferences')}>why us<span className="nav-span"></span>
                      </a>
                      <a className="header-nav__link" id="nav-link-two" onClick={() => scrollToSection('.services')}>what we do<span className="nav-span"></span>
                      </a>
                      <a className="header-nav__link" id="nav-link-three" onClick={() => scrollToSection('.feedback')}>write to us<span className="nav-span"></span>
                      </a>
                    </nav>
                </div>
            </div>
            <MobileNav/>
        </header>
        </>
    )
    
}