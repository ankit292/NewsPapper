import React, { Component } from 'react';
import { Link } from 'react-router-dom'
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
      key: 1,
      getCountry: this.props.getCountry
    };
    this.handleChange = this.handleChange.bind(this);
    // console.log(this.state.getCountry)
  }
  handleChange(e) {
   const getva=e.target.value
    this.setState({ 
      value: getva,
      key: this.state.key+1,
      getCountry: e.target.value
     });
    this.props.onChange(getva);
    
  }

  render() {
    return (
      <div>
      
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">NewsMonkey</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/business">business</Link></li> 
                    <li className="nav-item"><Link className="nav-link" to="/entertainment">entertainment</Link></li> 
                    <li className="nav-item"><Link className="nav-link" to="/general">general</Link> </li> 
                    <li className="nav-item"><Link className="nav-link" to="/health">health</Link> </li> 
                   <li className="nav-item"><Link className="nav-link" to="/science">science</Link></li> 
                    <li className="nav-item"><Link className="nav-link" to="/sports">sports</Link> </li> 
                   <li className="nav-item"><Link className="nav-link" to="/technology">technology</Link> </li> 
               </ul>
                <form className="d-flex">
                  <select className="form-select" id={this.state.key}  value={this.state.value} onChange={this.handleChange}>
                      {options.map((option,lenght)=>{
                        return <option key={lenght}   value={option.value}>{option.label} </option>
                
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


