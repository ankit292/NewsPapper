import React, { Component } from 'react'
const options = [
  {
    label: "India",
    value: "in",
  },
  {
    label: "USA",
    value: "us",
  },
  {
    label: "China",
    value: "cn",
  },
  {
    label: "UAE",
    value: "ua",
  },
];
export class NavBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: "India",
      key: "in"
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ value: e.target.value, key:  e.target.value });
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">NewsMonkey</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/about">About</a>
                    </li> 
                </ul>
                <form className="d-flex">
                  <select className="form-select" key={this.state.key}  value={this.state.value} onChange={this.handleChange}>
                      {options.map((option)=>{
                      return <option key={option.key}  value={option.value}>{option.label}</option>
                      })}
                    </select>
                </form>
                </div>
            </div>
            </nav>
      </div>
    )
  }
}

export default NavBar
