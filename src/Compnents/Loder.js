import React, { Component } from "react";
import loder from "./../loading-gif.gif";
export default class Loder extends Component {
  render() {
    let styleImg = {
      height: "100px",
      width: "100px",
      // position: "fixed",
      // top: "50%",
      // left: "50%",
      // transform: "translate(-50%, -50%)",
      zIndex: 999,
      background: "transparent",
    };
    return (
      <div className="text-center">
        <img src={loder} className="card-img-top" alt="..." style={styleImg} />
      </div>
    );
  }
}
