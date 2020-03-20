import React from "react";
import VegProductos from "./VegProductos";
import remolacha from "../assets/Images/Remolacha.jpg";
import vertical from "../assets/Illustrations/Huerto_(Verde).svg";
import caja from "../assets/Illustrations/huerto3.svg";
import suelo from "../assets/Illustrations/Papa_Niño_(Verde).svg";

function MainProductos() {
  return (
    <main className="mainp">
      <div className="mainp__first-container">
        <div className="mainp__first-container--text">
          <h1 className="mainp__first-container--title">Nuestros Productos</h1>
          <h2 className="mainp__first-container--sub">
            Tener un espacio donde realizar cultivo de hortalizas, legumbres,
            plantas medicinales son posibles con Sembrana, diseñamos tu huerto
            autosustentable con luz y agua propia, por lo que no importa el
            lugar de tu casa que escojas. Tu huerto va a respetar los procesos
            naturales de los alimentos, vas a tener la seguridad de que tu
            familia consume alimentos sanos porque eres testigo de su
            crecimiento, y se convertirá en tu nueva pasión saludable.
          </h2>
        </div>
        <div className="mainp__first-container--carousel">
          <div className="mainp__first-container--slide">
            <img
              className="mainp__first-container--vector"
              src={remolacha}
              alt="Sembrana"
            />
          </div>
        </div>
      </div>
      <div className="mainp__second-container">
        <h1 className="mainp__second-container--title">Nuestros Huertos</h1>
        <div className="mainp__second-container--cardcontainer">
          <div className="mainp__second-container--card">
            <img
              className="mainp__second-container--image"
              src={vertical}
              alt="Sembrana"
            />
            <h2 className="mainp__second-container--label">Huerto Vertical</h2>
            <h3 className="mainp__second-container--sublabel">
              Este tipo de huertos nos permiten ahorrar espacio y de esta manera
              tener nuestras plantas u hortalizas en varios rincones de nuestra
              vivienda. Además, resultan muy cómodos y atractivos para
              decoración de interiores, podemos hacerlo con luz y riego propio.
            </h3>
          </div>
          <div className="mainp__second-container--card">
            <img
              className="mainp__second-container--image"
              src={caja}
              alt="Sembrana"
            />
            <h2 className="mainp__second-container--label">Cajon Elevado</h2>
            <h3 className="mainp__second-container--sublabel">
              Si no dispones de jardín y quieres tener tu propio huerto, ¡no hay
              problema! El cultivo en cajones es una buena alternativa; se
              pueden adaptar en terrazas, balcones, cocina o en cualquier otro
              lugar de la casa donde llegue el sol y de esta manera disponer de
              vegetales frescos.
            </h3>
          </div>
          <div className="mainp__second-container--card">
            <img
              className="mainp__second-container--image"
              src={suelo}
              alt="Sembrana"
            />
            <h2 className="mainp__second-container--label">Siembra en Suelo</h2>
            <h3 className="mainp__second-container--sublabel">
              Si tienes jardín en casa puedes aprovechar el espacio para que
              diseñemos e instalemos tu huerto orgánico. Al cosechar los
              primeros vegetales, descubrirás su sabor auténtico y no querrás
              volver a consumir alimentos cultivados con químicos.
            </h3>
          </div>
        </div>
      </div>
      <VegProductos />
    </main>
  );
}

export default MainProductos;
