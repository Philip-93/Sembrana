import tomato from "../assets/veg/tomato.svg";
//10 more
import axios from "axios";
import React, { Component } from "react";

const vegetablesPhotos = [tomato, tomato, tomato];

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
        <h1 className="veg__title">Nuestros Vegetales</h1>
        <div className="veg__flex">
          {this.state.vegetables.map((vegetable, index) => (
            <div key={vegetable.id} className="veg__card-container">
              <div className="veg__card-body">
                <h2 className="veg__card-body--title">{vegetable.name}</h2>
                <h3 className="veg__card-body--subtitle">{vegetable.latin}</h3>
              </div>
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
          ))}
        </div>
      </div>
    );
  }
}
export default Vegetables;
