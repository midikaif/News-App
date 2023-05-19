import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

export default class Navbar extends Component {
  render() {
    return (
      
      <nav className="navbar navbar-expand-lg sticky-top" data-bs-theme="dark" style={{ backgroundColor: '#e91e63' }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className='nav-item'>
                <Link to="/business" className="nav-link"></Link>
              </li>
              <li className='nav-item'>
                <Link to="/entertainment" className="nav-link">Entertainment</Link>
              </li>
              <li className='nav-item'>
                <Link to="/health" className="nav-link">Health</Link>
              </li>
              <li className='nav-item'>
                <Link to="/science" className="nav-link">Science</Link>
              </li>
              <li className='nav-item'>
                <Link to="/sports" className="nav-link">Sports</Link>
              </li>
              <li className='nav-item'>
                <Link to="/technology" className="nav-link">Technology</Link>
              </li>

              <li className="nav-item dropdown">
                <Link className="nav-link  dropdown-toggle" to="#" data-toggle="dropdown">United States</Link>
                <ul className="dropdown-menu fade-up">
                  <li><Link className="dropdown-item" to="#"> Submenu item 1</Link></li>
                  <li><Link className="dropdown-item" to="#"> Submenu item 2 </Link></li>
                  <li><Link className="dropdown-item" to="#"> Submenu item 2 </Link></li>
                  <li><Link className="dropdown-item" to="#"> Submenu item 2 </Link></li>
                  <li><Link className="dropdown-item" to="#"> Submenu item 2 </Link></li>
                  <li><Link className="dropdown-item" to="#"> Submenu item 2 </Link></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link className="nav-link  dropdown-toggle" to="#" data-toggle="dropdown">India</Link>
                <ul className="dropdown-menu fade-up">
                  <li><Link className="dropdown-item" to="#"> Submenu item 1</Link></li>
                  <li><Link className="dropdown-item" to="#"> Submenu item 2 </Link></li>
                  <li><Link className="dropdown-item" to="#"> Submenu item 3 </Link></li>
                </ul>
              </li>

            </ul>
          </div>
        </div>

      </nav>
    )
  }
}
