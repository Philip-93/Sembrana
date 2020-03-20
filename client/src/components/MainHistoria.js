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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, recusandae ullam eum provident tempora aliquam culpa
            quod laudantium non. Consequuntur voluptas rerum eius aperiam error
            cum tempora voluptates quos vero. Lorem ipsum dolor sit amet
            consectetur
          </p>
          <p className="mainh__description--p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, recusandae ullam eum provident tempora aliquam culpa
            quod laudantium non. Consequuntur voluptas rerum eius aperiam error
            cum tempora voluptates quos vero. Lorem ipsum dolor sit amet
            consectetur
          </p>
          <p className="mainh__description--p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, recusandae ullam eum provident tempora aliquam culpa
            quod laudantium non. Consequuntur voluptas rerum eius aperiam error
            cum tempora voluptates quos vero. Lorem ipsum dolor sit amet
            consectetur
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          doloribus rem, ullam accusamus officiis quidem illum corporis impedit
          repellat vero dolorem iure, veniam consequatur! Ea ab consectetur ut
          fugiat sint! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Inventore et quam facilis eaque, consectetur saepe quasi iste
          pariatur, sed voluptas perferendis! Sunt repellat aspernatur neque
          laboriosam cum in illo tenetur!
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
