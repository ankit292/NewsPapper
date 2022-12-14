import React, { Component } from 'react'
import loder from './../Loading_icon.gif'
export default class Loder extends Component {
    
  render() {
    let styleImg = {
        height: "200px",
        width: "300px",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 999,
        background: "transparent",
    }
    return (
      <div>
        <img src={loder} className="card-img-top" alt="..." style={styleImg}/>
      </div>
    )
  }
}
