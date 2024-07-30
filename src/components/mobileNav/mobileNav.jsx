import "./mobileNav.css"
import gear from "/gear.svg"



export default function MobileNav(){
    const scrollToSection = (selector) => {
        const section = document.querySelector(selector);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };
    return(
        <nav className= "mobNav">
            <div className="mobNav-inner">
                <a className="mobNav-link" onClick={() => scrollToSection('.preferences')}>why us</a>
                <a className="mobNav-link" onClick={() => scrollToSection('.services')}>what we do</a>
                <a className="mobNav-link" onClick={() => scrollToSection('.feedback')}>write to us</a>
            </div>
            <div className="mobNav-gear">
                <img src={gear} alt="" />
            </div>
        </nav>
    )
}