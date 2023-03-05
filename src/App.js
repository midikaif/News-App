import React, { Component } from 'react'
import Navbar from './Components/Navbar/Navbar'
import News from './Components/News/News'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        
        <News />
      </div>
    )
  }
}
