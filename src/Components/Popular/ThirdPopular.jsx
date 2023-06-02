import React, { Component } from "react";
import Slider from "react-slick"
import cover from '../../SampleImg/newsHeader.jpg'
import Heading from "../Heading/Heading";
import './SecPopular.css'

export default class ThirdPopular extends Component {
  render() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      }
return <>
          <section className='popularPost life'>
        <Heading title='Life Style' />
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
                      <h1 className='title'>title...</h1>
                      <div className='date'>
                        <label>date</label>
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
                      <h1 className='title'>title...</h1>
                      <div className='date'>
                        <label>date</label>
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
                      <h1 className='title'>title...</h1>
                      <div className='date'>
                        <label>date</label>
                      </div>
                    </div>
                  </div>
                </div>
          </Slider>
        </div>
      </section>

    </>;
  }
}
