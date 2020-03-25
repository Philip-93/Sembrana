import divider2 from "../assets/Illustrations/divider2.svg";
import React from "react";

function Contacto() {
  return (
    <main className="contacto">
      <div className="contacto__title-container">
        <h1 className="contacto__title-container--title">Empecémos</h1>
        <img
          className="contacto__title-container--divider"
          src={divider2}
          alt="Sembrana"
        />
        <h2 className="contacto__title-container--subtitle">
          Para crear tu huerto o jardín vertical ideal, déjanos saber dónde
          quieres que se instale (interior o exterior de casa), condiciones de
          luz natural, y todos los detalles necesarios para iniciar el proyecto.
        </h2>
      </div>
      <div className="contacto__form-container">
        <form className="contacto__form">
          <div className="contacto__first-container">
            <input
              className="contacto__first-container--nombre"
              type="text"
              placeholder="Nombre"
            />
            <input
              className="contacto__first-container--telephono"
              type="text"
              placeholder="Teléfono"
            />
          </div>
          <input
            className="contacto__second-container--email"
            type="text"
            placeholder="Email"
          />
          <textarea
            className="contacto__second-container--req"
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Dejanos tu Requerimiento"
          ></textarea>
          <button className="contacto__second-container--button">Enviar</button>
        </form>
      </div>
    </main>
  );
}

export default Contacto;
