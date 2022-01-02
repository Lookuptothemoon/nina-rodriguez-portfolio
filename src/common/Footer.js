import { Link } from "react-router-dom";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InstagramIcon from '@mui/icons-material/Instagram';
import ExternalLink from "./ExternalLink";
import "./Footer.scss";

function Footer() {
  return (
    <footer>
      <div className="footer-title">Let's Work Together!</div>

      <div className="footer-nav">
        <div className="footer-nav-item">
          <div className="footer-nav-item-title">Follow Me</div>
          <nav>
            <div className="social-icons">
              <ExternalLink 
                src="https://www.instagram.com/nina.is.on/"
                text={<InstagramIcon fontSize="large" />} 
              />
            </div>
          </nav>
        </div>

        <div className="footer-nav-item">
          <div className="footer-nav-item-title">Contact Me</div>
          <div className="footer-nav-item-contact">
            <Link to="/contact"><MailOutlineIcon fontSize="large" /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
