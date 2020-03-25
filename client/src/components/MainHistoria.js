import close from "../assets/Images/closeup.jpg";
import gardening from "../assets/Images/gardening1.jpg";
import carrots from "../assets/Images/carrots.jpg";
import divider from "../assets/Illustrations/divider.svg";
import React from "react";

function MainHistoria() {
  return (
    <main className="mainh">
      <div className="mainh__description">
        <div className="mainh__description--frame">
          <p className="mainh__description--p">
            Sembrana nació de una pregunta, como podemos propagar la
            sustentabilidad, dar a nuestros usuarios la habilidad de crecer sus
            propios vegetales y mejorar la estética de su hogar al mismo tiempo?
            Después de varios meses de consideración Sembrana fue creado.
          </p>
          <p className="mainh__description--p">
            La misión de Sembrana siempre ha sido crear una comunidad consciente
            y asegurar un futuro verde y sustentable para las futuras
            generaciones. A través del trabajo que estamos haciendo, estamos
            ayudando a que nuestros clientes tengan la habilidad de crecer sus
            verduras.
          </p>
          <p className="mainh__description--p">
            Seguiremos con nuestra misión mientras podamos hacerlo, siempre
            dispuestos a ayuda a nuestra comunidad y al planeta al mismo tiempo.
            A través de Sembrana, nuestros clientes pueden obtener verduras
            frescas, vivir de una manera más sustentable y decorar su hogar con
            nuestras plantas.
          </p>
        </div>
      </div>
      <div className="mainh__lastpic-container">
        <div className="mainh__lastpic-container--pic"></div>
      </div>
      <div className="mainh__main">
        <h2 className="mainh__main--title">NOS IMPORTA TU SALUD</h2>
        <img className="mainh__main--divider" src={divider} alt="Sembrana" />
        <p className="mainh__main--text">
          En Sembrana lo más importante para nosotros eres tú! Queremos darte
          toda la información y respaldo necesario para que tengas la habilidad
          de cumplir tus metas. Nuestro plan ideal es capacitar a nuestros
          clientes para que ellos tengan la habilidad de crear, mantener y
          últimamente cosechar las verduras para que las puedas compartir con
          tus seres queridos.
        </p>
      </div>
      <div className="mainh__banner">
        <img className="mainh__banner--image" src={close} alt="Sembrana" />
        <img className="mainh__banner--image" src={gardening} alt="Sembrana" />
        <img className="mainh__banner--image" src={carrots} alt="Sembrana" />
      </div>
    </main>
  );
}

export default MainHistoria;
