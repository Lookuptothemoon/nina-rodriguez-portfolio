import { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Modal from '@mui/material/Modal';
import "./MobileMenu.scss";

function MobileMenu() {
  const [showMenu, setShowMenu] = useState(false);

  // open menu
  const openMenu = (e) => {
    setShowMenu(true);
  };
  // close menu
  const closeMenu = (e) => {
    setShowMenu(false);
  };

  return (
    <div className="mobile-menu">
      <div className="mobile-menu-header">
        <Link to="/" className="mobile-logo">
          NINA RODRIGUEZ.
        </Link>

        <button className="mobile-menu-trigger" onClick={openMenu}>
          <MenuIcon />
        </button>
      </div>

      <Modal
        className="mobile-menu-nav-modal"
        open={showMenu}
        onClose={closeMenu}
        aria-labelledby="mobile menu"
        aria-describedby="mobile menu modal"
      >
        <nav className="mobile-nav">
          <Link onClick={closeMenu} to="/" className="mobile-nav-item">
            About
          </Link>

          <Link onClick={closeMenu} to="/work" className="mobile-nav-item">
            Work
          </Link>

          <Link onClick={closeMenu} to="/contact" className="mobile-nav-item">
            Contact
          </Link>

          <button className="mobile-nav-close-btn" onClick={closeMenu}>
            <CloseIcon fontSize="large" />
          </button>
        </nav>
      </Modal>
    </div>
  );
}

export default MobileMenu;
