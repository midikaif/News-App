import React, { Component } from 'react'
import './Heading.css'

export default class Heading extends Component {
  render() {

    return (
      <div className='heading'><h6>
        {this.props.title}
        </h6>
        
        </div>
    )
  }
}
