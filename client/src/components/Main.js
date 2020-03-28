import React from "react";
import papas from "../assets/Images/papas.jpg";
import face from "../assets/Icons/face.svg";
import ecuador from "../assets/Icons/ecuador.svg";
import garden from "../assets/Icons/garden.svg";
import asesoria from "../assets/Illustrations/Mujer_(Verde2).svg";
import mantenimiento from "../assets/Illustrations/Carretilla.svg";
import instalacion from "../assets/Illustrations/Huerto-Hombre.svg";
import divider4 from "../assets/Illustrations/divider4.svg";
import { Link } from "react-router-dom";

function Main() {
  return (
    <main className="main">
      <div className="main__tiles">
        <div className="main__tiles--tileo">
          <img className="main__tiles--image" src={face} alt="Sembrana" />
          <h3 className="main__tiles--sub"> 500+ Clientes Satisfechos</h3>
        </div>
        <div className="main__tiles--tile">
          <img className="main__tiles--image" src={ecuador} alt="Sembrana" />
          <h3 className="main__tiles--sub">
            Instalaciones Dentro de 13 Provincias
          </h3>
        </div>
        <div className="main__tiles--tileo">
          <img className="main__tiles--image" src={garden} alt="Sembrana" />
          <h3 className="main__tiles--sub">1000+ Huertos Instalados</h3>
        </div>
      </div>
      <div className="main__first-container">
        <div className="main__first-container--text">
          <h1 className="main__first-container--title">Quienes Somos</h1>
          <h2 className="main__first-container--sub">
            Instalación de huertos orgánicos en tu vivienda. Conecta como nunca
            antes, con las plantas que alimentan a tu familia. Con nuestros
            huertos orgánicos, tu buena nutrición nace en tu propia casa. Del
            huerto a la mesa, y en tu salud para siempre
          </h2>
          <Link to="/historia">
            <button className="main__first-container--button">
              Nuestra Historia
            </button>
          </Link>
        </div>
        <div className="main__first-container--icon">
          <img
            className="main__first-container--vector"
            src={papas}
            alt="Sembrana"
          />
        </div>
      </div>
      <div className="main__second-container">
        <div className="main__second-container--title-container">
          <h1 className="main__second-container--title">Ofrecemos</h1>
          <img
            className="main__second-container--divider"
            src={divider4}
            alt="Sembrana"
          />
        </div>
        <div className="main__second-container--cardcontainer">
          <div className="main__second-container--card">
            <img
              className="main__second-container--image"
              src={asesoria}
              alt="Sembrana"
            />
            <h2 className="main__second-container--label">Asesoría</h2>
            <h3 className="main__second-container--sublabel">
              Cuenta con nosotros para asesorarte y despejar cualquier
              inquietud, te guiamos para escoger los vegetales, hortalizas o
              frutas para tu huerto y de igual manera durante todo el ciclo de
              cultivo
            </h3>
          </div>
          <div className="main__second-container--card">
            <img
              className="main__second-container--image"
              src={instalacion}
              alt="Sembrana"
            />
            <h2 className="main__second-container--label">Instalación</h2>
            <h3 className="main__second-container--sublabel">
              Diseñamos e instalamos tu huerto acorde a tus necesidades,
              adaptándolo al espacio y a las condiciones de luz en el lugar
              seleccionado con los módulos de cultivo y plantas que tu
              seleccionas para la primera y siguientes cosechas.
            </h3>
          </div>
          <div className="main__second-container--card">
            <img
              className="main__second-container--image"
              src={mantenimiento}
              alt="Sembrana"
            />
            <h2 className="main__second-container--label">Mantenimiento</h2>
            <h3 className="main__second-container--sublabel">
              Nuestro equipo capacitado está a tu disposición. Programa con
              nosotros el mantenimiento de tu huerto de forma periódica o según
              tus necesidades, también te entrenamos en los cuidados de tu
              huerto.
            </h3>
          </div>
        </div>
      </div>
      <div className="main__banner-container">
        <div className="main__banner-container--image">Vive Saludable</div>
      </div>
    </main>
  );
}

export default Main;
