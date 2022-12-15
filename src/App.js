
import './App.css';

import React, { Component } from 'react'
import NavBar from './Compnents/NavBar';
import NewsComponent from './Compnents/NewsComponent';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
 
  constructor(){
    super();
    this.state={
      getCountry: 'in'
    }
  }
  getinputfromnav = (value)=>{
    this.setState({getCountry: value});
  
 }
  render() {
    return (
      <div>
        
        
        <Router>
        <NavBar onChange={this.getinputfromnav} />
          <Routes>
            <Route exact path="/" element={<NewsComponent key={'sports'} pageSize={9} propgetCountry={this.state.getCountry} category={'sports'}/>}/>
            <Route exact path="/business" element={<NewsComponent key={'business'} pageSize={9} propgetCountry={this.state.getCountry} category={'business'}/>}/>
            <Route exact path="/entertainment" element={<NewsComponent key={'entertainment'} pageSize={9} propgetCountry={this.state.getCountry} category={'entertainment'}/>}/>
            <Route exact path="/general" element={<NewsComponent key={'general'} pageSize={9} propgetCountry={this.state.getCountry} category={'general'}/>}/>
            <Route exact path="/health" element={<NewsComponent key={'health'} pageSize={9} propgetCountry={this.state.getCountry} category={'health'}/>}/>
            <Route exact path="/science" element={<NewsComponent key={'science'} pageSize={9} propgetCountry={this.state.getCountry} category={'science'}/>}/>
            <Route exact path="/sports" element={<NewsComponent key={'sports'} pageSize={9} propgetCountry={this.state.getCountry} category={'sports'}/>}/>
            <Route exact path="/technology" element={<NewsComponent key={'technology'} pageSize={9} propgetCountry={this.state.getCountry} category={'technology'}/>}/>
          </Routes>
        </Router>
      </div>
    )
  }
}
