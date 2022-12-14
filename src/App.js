
import './App.css';

import React, { Component } from 'react'
import NavBar from './Compnents/NavBar';
import NewsComponent from './Compnents/NewsComponent';

export default class App extends Component {
 
  render() {
    return (
      <div>
        <NavBar/>
        <NewsComponent pageSize={9}/>
      </div>
    )
  }
}
