import "./App.css";

import React, { Component } from "react";
import NavBar from "./Compnents/NavBar";
import NewsComponent from "./Compnents/NewsComponent";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      getCountry: "in",
      bg: {
        bgHome: "rgb(255 255 255)",
        bgBusi: "#b5b5df",
        bgEnter: "#f5e389",
        bgGenral: "pink",
        bgHealth: "#0d78004a",
        bgScience: "#c0c5ff",
        bgSport: "#00ffd066",
        bgTech: "#78747429",
      },
    };
  }
  getinputfromnav = (value) => {
    this.setState({ getCountry: value });
  };
  render() {
    const pageSizeCount = 9;
    return (
      <div>
        <Router>
          <NavBar onChange={this.getinputfromnav} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <NewsComponent
                  key={"sports"}
                  bgColor={this.state.bg.bgHome}
                  pageSize={pageSizeCount}
                  propgetCountry={this.state.getCountry}
                  category={"sports"}
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <NewsComponent
                  key={"business"}
                  bgColor={this.state.bg.bgBusi}
                  pageSize={pageSizeCount}
                  propgetCountry={this.state.getCountry}
                  category={"business"}
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <NewsComponent
                  key={"entertainment"}
                  bgColor={this.state.bg.bgEnter}
                  pageSize={pageSizeCount}
                  propgetCountry={this.state.getCountry}
                  category={"entertainment"}
                />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <NewsComponent
                  key={"general"}
                  bgColor={this.state.bg.bgGenral}
                  pageSize={pageSizeCount}
                  propgetCountry={this.state.getCountry}
                  category={"general"}
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <NewsComponent
                  key={"health"}
                  bgColor={this.state.bg.bgHealth}
                  pageSize={pageSizeCount}
                  propgetCountry={this.state.getCountry}
                  category={"health"}
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <NewsComponent
                  key={"science"}
                  bgColor={this.state.bg.bgScience}
                  pageSize={pageSizeCount}
                  propgetCountry={this.state.getCountry}
                  category={"science"}
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <NewsComponent
                  key={"sports"}
                  bgColor={this.state.bg.bgSport}
                  pageSize={pageSizeCount}
                  propgetCountry={this.state.getCountry}
                  category={"sports"}
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <NewsComponent
                  key={"technology"}
                  bgColor={this.state.bg.bgTech}
                  pageSize={pageSizeCount}
                  propgetCountry={this.state.getCountry}
                  category={"technology"}
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
