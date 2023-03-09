import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import News from './Components/News/News'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={
            <News key={'general'} category={'general'}/>
          }>
          </Route>
          <Route path='/entertainment' element={
            <News key={'entertainment'} category={'entertainment'}/>
          }>
          </Route>
          <Route path='/health' element={
            <News key={'health'} category={'health'}/>
          }>
          </Route>
          <Route path='/science' element={
            <News key={'science'} category={'science'}/>
          }>
          </Route>
          <Route path='/sports' element={
            <News key={'sports'} category={'sports'}/>
          }>
          </Route>
          <Route path='/technology' element={
            <News key={'technology'} category={'technology'}/>
          }>
          </Route>

        </Routes>
      </BrowserRouter>

    )
  }
}
