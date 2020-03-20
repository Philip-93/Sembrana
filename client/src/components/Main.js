import React from "react";
import fern from "../assets/Images/fern.jpg";
import papas from "../assets/Images/papas.jpg";
import plants from "../assets/Illustrations/plants.svg";
import grooming from "../assets/Images/grooming.jpg";
import asesoria from "../assets/Illustrations/Mujer_(Verde2).svg";
import mantenimiento from "../assets/Illustrations/Carretilla.svg";
import instalacion from "../assets/Illustrations/Huerto-Hombre.svg";
import { Link } from "react-router-dom";

function Main() {
  return (
    <main className="main">
      <div className="main__tiles">
        <div className="main__tiles--tileo">
          <h2 className="main__tiles--title">500</h2>
          <h3 className="main__tiles--sub">Clientes Satisfechos</h3>
        </div>
        <div className="main__tiles--tile">
          <h2 className="main__tiles--title">500</h2>
          <h3 className="main__tiles--sub">Clientes Satisfechos</h3>
        </div>
        <div className="main__tiles--tileo">
          <h2 className="main__tiles--title">500</h2>
          <h3 className="main__tiles--sub">Clientes Satisfechos</h3>
        </div>
      </div>
      <div className="main__first-container">
        <div className="main__first-container--text">
          <h1 className="main__first-container--title">Quienes Somos</h1>
          <h2 className="main__first-container--sub">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            repudiandae laborum earum, id sit assumenda. Mollitia soluta ratione
            amet nisi ab praesentium, perspiciatis voluptatum neque porro sunt
            error deserunt facere?
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
            src={fern}
            alt="Sembrana"
          />
        </div>
      </div>
      <div className="main__second-container">
        <h1 className="main__second-container--title">Ofrecemos</h1>
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
        <div className="main__banner-container--image">Come Saludable</div>
      </div>
    </main>
  );
}

export default Main;
