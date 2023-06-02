import React, { Component } from 'react'
import Slider from "react-slick"
import cover from '../../SampleImg/newsHeader.jpg'
import './SecPopular.css'
import Heading from '../Heading/Heading'

export default class SecPopular extends Component {
  render() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
    }
    return (
        <>
        <section className='popularPost'>
          <Heading title={'again popular'}/>
          <div className='content'>
            <Slider {...settings}>
                  <div className='items'>
                    <div className='box shadow'>
                      <div className='images'>
                        <div className='img'>
                          <img src={cover} alt='' />
                        </div>
                        <div className='category category1'>
                          <span>catgeory</span>
                        </div>
                      </div>
                      <div className='text'>
                        <h1 className='title'>Sample Title...</h1>
                        <div className='date'>
                          <label>Sample date</label>
                        </div>
                      </div>
                    </div>
                  
                  </div>
                  <div className='items'>
                    <div className='box shadow'>
                      <div className='images'>
                        <div className='img'>
                          <img src={cover} alt='' />
                        </div>
                        <div className='category category1'>
                          <span>catgeory</span>
                        </div>
                      </div>
                      <div className='text'>
                        <h1 className='title'>Sample Title...</h1>
                        <div className='date'>
                          <label>Sample date</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='items'>
                    <div className='box shadow'>
                      <div className='images'>
                        <div className='img'>
                          <img src={cover} alt='' />
                        </div>
                        <div className='category category1'>
                          <span>catgeory</span>
                        </div>
                      </div>
                      <div className='text'>
                        <h1 className='title'>Sample Title...</h1>
                        <div className='date'>
                          <label>Sample date</label>
                        </div>
                      </div>
                    </div>
                  </div>
            </Slider>
          </div>
        </section>
      </>
    )
  }
}
