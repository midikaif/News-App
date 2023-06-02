import React, { Component } from 'react'
import cover from '../../SampleImg/newsHeader.jpg'
import Heading from '../Heading/Heading'
import './RandomPosts.css'

export default class RandomPosts extends Component {
  render() {
    return (
<>
<section className='tpost'>
        <Heading title='Tiktok post' />
            <div className='box flexSB'>
              <div className='img'>
                <img src={cover} alt='' />
              </div>
              <div className='text'>
                <h1 className='title'>title...</h1>
                <span>a year ago</span>
              </div>
            </div>

            <div className='box flexSB'>
              <div className='img'>
                <img src={cover} alt='' />
              </div>
              <div className='text'>
                <h1 className='title'>title...</h1>
                <span>a year ago</span>
              </div>
            </div>

            <div className='box flexSB'>
              <div className='img'>
                <img src={cover} alt='' />
              </div>
              <div className='text'>
                <h1 className='title'>title...</h1>
                <span>a year ago</span>
              </div>
            </div>

      </section>
</>    )
  }
}
