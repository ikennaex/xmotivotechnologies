import React from "react";
import "../../Pages/Homepage/footer.css";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";

const year = new Date().getFullYear()

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-divs">
        <div className="stayconnected">
          <p className="stayconnected-text">Stay Connected!</p>
          <p className="email-footer">themotivomedia@gmail.com</p>
          <form className="subscribe-form" action="">
            <input className="stayconnected-input" type="text" />
            <button>Subscribe</button>
          </form>
        </div>

        <div className="social-footer">
          <div>
            <a target="_blank" href="https://web.facebook.com/motivodesigns">

            <FaFacebookF className="footer-icon" size={20} />
            </a>
          </div>

          <div>
            <a target="_blank" href="https://www.instagram.com/motivoinc/">
            <FaInstagram className="footer-icon" size={20} />
            </a>
          </div>

          <div>
            <a target="_blank" href="https://api.whatsapp.com/message/WSNOXU7DHD2TL1?autoload=1&app_absent=0">

            <FaWhatsapp className="footer-icon" size={20} />
            </a>
          </div>
        </div>
      <p className="copyright-text">Copyright © {year} Motivo 💜</p>
      </div>
    </div>
  );
};

export default Footer;
