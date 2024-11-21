import "./styles.css";
import sun from "./../../images/icons/sun.svg";
import moon from "./../../images/icons/moon.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <NavLink to="/" className="logo">
                        <strong>Freelancer</strong> Portfolio
                    </NavLink>
            
                      
                    <button className="dark-mode-btn">
                        <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
                        <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
                    </button>
                      
                     <ul className="nav-list">
                        <li className="nav-list__item">
                            <NavLink 
                                to="/"
                                className="nav-list__link"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink 
                                to="/Projects"
                                className="nav-list__link"
                            >
                                Projects
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink 
                                to="/Contacts"
                                className="nav-list__link"
                            >
                                Contacts
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;