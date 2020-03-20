import logopng from "../assets/Logo/basicLogoWhite.png";
import { Link } from "react-router-dom";
import React from "react";

function Navigation() {
  return (
    <div className="nav">
      <header className="nav__main-container">
        <div className="nav__logo-container">
          <Link to="/">
            <img
              className="nav__logo-container--logo"
              src={logopng}
              alt="Sembrana"
            />
          </Link>
        </div>
        <div className="nav__pages-container">
          <div className="nav__productos-container">
            <Link to="/productos" className="nav__link">
              <h4 className="nav__title">Productos</h4>
            </Link>
          </div>
          <div className="nav__nuestra-historia-container">
            <Link to="/historia" className="nav__link">
              <h4 className="nav__title">Nuestra Historia</h4>
            </Link>
          </div>
          <div className="nav__servicios-container">
            <Link to="/contactanos" className="nav__link">
              <h4 className="nav__title">Contactanos</h4>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navigation;
