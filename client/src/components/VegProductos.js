import leftarrow from "../assets/Icons/leftArrowG.svg";
import rightarrow from "../assets/Icons/rightArrowG.svg";
import tomate from "../assets/veg/tomate.svg";
import pimiento from "../assets/veg/pimiento.svg";
import berenjena from "../assets/veg/berenjena.svg";
import calabaza from "../assets/veg/calabaza.svg";
import champinon from "../assets/veg/champinon.svg";
import col from "../assets/veg/col.svg";
import frejol from "../assets/veg/frejol.svg";
import lechuga from "../assets/veg/lechuga.svg";
import pepinillo from "../assets/veg/pepinillo.svg";
import remolacha from "../assets/veg/remolacha.svg";
import zanahoria from "../assets/veg/zanahoria.svg";
import jengibre from "../assets/veg/jengibre.svg";
import divider3 from "../assets/Illustrations/divider3.svg";

import axios from "axios";
import React, { Component } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

//Const that holds all the photos
const vegetablesPhotos = [
  tomate,
  pimiento,
  berenjena,
  calabaza,
  champinon,
  col,
  frejol,
  lechuga,
  pepinillo,
  remolacha,
  zanahoria,
  jengibre
];

class Vegetables extends Component {
  state = {
    vegetables: []
  };

  componentDidMount() {
    axios.get("/api/vegetables").then(res => {
      this.setState({
        vegetables: res.data
      });
    });
  }

  render() {
    if (this.state.vegetables.length === 0) return <h1>Loading</h1>;
    return (
      <div className="veg">
        <div className="veg__title-container">
          <h1 className="veg__title">Nuestros Vegetales</h1>
          <img className="veg__divider" src={divider3} alt="Sembrana" />
        </div>
        <CarouselProvider
          className="veg__carousel-provider"
          naturalSlideWidth={300}
          naturalSlideHeight={400}
          totalSlides={this.state.vegetables.length}
          visibleSlides={3}
          infinite={true}
        >
          <Slider className="veg__slider">
            {this.state.vegetables.map((vegetable, index) => {
              return (
                <Slide className={`tomato ${index}`} index={index}>
                  <div key={vegetable.id} className="veg__card-container">
                    <div className="veg__card-body">
                      <h2 className="veg__card-body--title">
                        {vegetable.name}
                      </h2>
                      <h3 className="veg__card-body--subtitle">
                        {vegetable.latin}
                      </h3>
                    </div>
                    <div className="veg__filter">
                      <div className="veg__image-container">
                        <img
                          className="veg__image-container--vector"
                          src={vegetablesPhotos[index]}
                          alt="Sembrana"
                        />
                      </div>
                      <div className="veg__card-bodyone">
                        <h2 className="veg__card-bodyone--title">
                          {vegetable.nutrition}
                        </h2>
                        <p className="veg__card-bodyone--description">
                          {vegetable.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Slide>
              );
            })}
          </Slider>
          <div className="veg__button-container">
            <ButtonBack>
              <img
                className="veg__button-container--back"
                src={leftarrow}
                alt="Sembrana"
              />
            </ButtonBack>
            <ButtonNext className="veg__button-container--next">
              <img
                className="veg__button-container--next"
                src={rightarrow}
                alt="Sembrana"
              />
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    );
  }
}
export default Vegetables;
