import instagram from "../assets/Icons/instagram.svg";
import facebook from "../assets/Icons/facebook.svg";
import message from "../assets/Icons/message.svg";
import mail from "../assets/Icons/mail.svg";
import telephone from "../assets/Icons/telephone.svg";
import logopng from "../assets/Logo/basicLogoWhite.png";
import { Link } from "react-router-dom";
import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__tiles">
        <div className="footer__tiles--tileo">
          <img className="footer__tiles--image" src={message} alt="Sembrana" />
          <h3 className="footer__tiles--sub">+593 99-928-0973</h3>
        </div>
        <div className="footer__tiles--tile">
          <img className="footer__tiles--image" src={mail} alt="Sembrana" />
          <h3 className="footer__tiles--sub">
            <a
              class="footer__tiles--email"
              href="mailto:contacto@sembrana.com.ec"
            >
              CONTACTO@SEMBRANA.COM.EC
            </a>
          </h3>
        </div>
        <div className="footer__tiles--tileo">
          <img
            className="footer__tiles--image"
            src={telephone}
            alt="Sembrana"
          />
          <h3 className="footer__tiles--sub">+593 99-261-3950</h3>
        </div>
      </div>
      <div className="footer__footer-container">
        <div className="footer__first-container">
          <div className="footer__first-container--social">
            <div className="footer__first-container--icon">
              <a href="https://www.instagram.com/sembrana.ec/">
                <img src={instagram} alt="Sembrana" />
              </a>
            </div>
            <div className="footer__first-container--icon">
              <a href="https://www.facebook.com/sembrana.ec/?__tn__=%2Cd%2CP-R&eid=ARBjKuvtQB5Rtm2q-M20nSXTXrxITpVvkXPJx5NNTnTlrQgo4uTQKVAx9DaAVKX-PRNUcCh-K2xnAXwf">
                <img src={facebook} alt="Sembrana" />
              </a>
            </div>
          </div>
          <Link to="/">
            <img
              className="footer__first-container--logo"
              src={logopng}
              alt="Sembrana"
            />
          </Link>
          <h4 className="footer__first-container--copyright">
            © 2020 Derechos Reservados
          </h4>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
