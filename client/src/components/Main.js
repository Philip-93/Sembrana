import acelga from "../assets/Images/Acelga.jpg";
import plants from "../assets/Illustrations/plants.svg";
import React from "react";

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
        <div className="main__tiles--tile">
          <h2 className="main__tiles--title">500</h2>
          <h3 className="main__tiles--sub">Clientes Satisfechos</h3>
        </div>
      </div>
      <div className="main__content-container">
        <div className="main__content-container--text">
          <h1 className="main__content-container--title">Quienes Somos</h1>
          <h2 className="main__content-container--sub">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            repudiandae laborum earum, id sit assumenda. Mollitia soluta ratione
            amet nisi ab praesentium, perspiciatis voluptatum neque porro sunt
            error deserunt facere?
          </h2>
          <button className="main__content-container--button">
            Nuestra Historia
          </button>
        </div>
        <div className="main__content-container--icon">
          <img
            className="main__content-container--vector"
            src={plants}
            alt="Sembrana"
          />
        </div>
      </div>
      <div className="main__content-container">
        <div className="main__content-container--icon">
          <img
            className="main__content-container--vector"
            src={plants}
            alt="Sembrana"
          />
        </div>
        <div className="main__content-container--text">
          <h1 className="main__content-container--title">Quienes Somos</h1>
          <h2 className="main__content-container--sub">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            repudiandae laborum earum, id sit assumenda. Mollitia soluta ratione
            amet nisi ab praesentium, perspiciatis voluptatum neque porro sunt
            error deserunt facere?
          </h2>
          <button className="main__content-container--button">
            Nuestra Historia
          </button>
        </div>
      </div>
      <div className="main__banner-container">
        <div className="main__banner-container--image">Come Saludable</div>
      </div>
    </main>
  );
}

export default Main;
