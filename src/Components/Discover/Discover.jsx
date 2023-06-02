import React from "react"
import cover from '../../SampleImg/newsHeader.jpg'
import "./Discover.css"
import Heading from "../Heading/Heading"

const Discover = () => {
  return (
    <>
      <section className='discover'>
        <div className='container'>
          <Heading title='Discover' />
          <div className='content'>
                <div className='box'>
                  <div className='img'>
                    <img src={cover} alt='' />
                  </div>
                  <h1 className='title'>Demo</h1>
                </div>
                <div className='box'>
                  <div className='img'>
                    <img src={cover} alt='' />
                  </div>
                  <h1 className='title'>Demo</h1>
                </div>
                <div className='box'>
                  <div className='img'>
                    <img src={cover} alt='' />
                  </div>
                  <h1 className='title'>Demo</h1>
                </div>
                <div className='box'>
                  <div className='img'>
                    <img src={cover} alt='' />
                  </div>
                  <h1 className='title'>Demo</h1>
                </div>
                <div className='box'>
                  <div className='img'>
                    <img src={cover} alt='' />
                  </div>
                  <h1 className='title'>Demo</h1>
                </div>
                <div className='box'>
                  <div className='img'>
                    <img src={cover} alt='' />
                  </div>
                  <h1 className='title'>Demo</h1>
                </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Discover
