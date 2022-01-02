import { Link } from "react-router-dom"
import "./DesktopMenu.scss"

function DesktopMenu() {
    return (
        <div className="desktop-menu">
            <div className="desktop-menu-logo">
                <h1>NINA RODRIGUEZ.</h1>
            </div>

            <nav className="desktop-menu-nav">
                <div className="desktop-menu-nav-item">
                    <Link to="/">About</Link>
                </div>

                <div className="desktop-menu-nav-item">
                    <Link to="/work">Work</Link>
                </div>

                <div className="desktop-menu-nav-item">
                    <Link to="/contact">Contact</Link>
                </div>
            </nav>
        </div>
    );
}

export default DesktopMenu;