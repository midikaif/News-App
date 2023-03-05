import React, { Component } from 'react'
import './Navbar.css'

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg" data-bs-theme="dark" style={{ backgroundColor: '#e09f3e' }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link  dropdown-toggle" href="#" data-toggle="dropdown">United States</a>
                <ul className="dropdown-menu fade-up">
                  <li><a className="dropdown-item" href="#"> Submenu item 1</a></li>
                  <li><a className="dropdown-item" href="#"> Submenu item 2 </a></li>
                  <li><a className="dropdown-item" href="#"> Submenu item 2 </a></li>
                  <li><a className="dropdown-item" href="#"> Submenu item 2 </a></li>
                  <li><a className="dropdown-item" href="#"> Submenu item 2 </a></li>
                  <li><a className="dropdown-item" href="#"> Submenu item 2 </a></li>
                </ul>
              </li>
              
              <li className="nav-item dropdown">
                <a className="nav-link  dropdown-toggle" href="#" data-toggle="dropdown">India</a>
                <ul className="dropdown-menu fade-up">
                  <li><a className="dropdown-item" href="#"> Submenu item 1</a></li>
                  <li><a className="dropdown-item" href="#"> Submenu item 2 </a></li>
                  <li><a className="dropdown-item" href="#"> Submenu item 3 </a></li>
                </ul>
              </li>
              
            </ul>
          </div>
        </div>

      </nav>
    )
  }
}
