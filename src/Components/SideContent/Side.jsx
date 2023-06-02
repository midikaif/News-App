import React, { Component } from "react";
import Heading from "../Heading/Heading";
import Slider from "react-slick"
import SocialMedia from "../SocialMedia/SocialMedia";
import cover from "../../SampleImg/newsHeader.jpg";
import "./Side.css";
import RandomPosts from "../RandomPosts/RandomPosts";

export default class Side extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    const catgeory = [
      "world",
      "travel",
      "sport",
      "fun",
      "health",
      "fashion",
      "business",
      "technology",
    ];
    return (
      <>
        <Heading title="Stay Connected" />
        <SocialMedia />
        <Heading title="Subscribe" />
        <section className="subscribe">
          <h1 className="title">Subscribe to our New Stories</h1>
          <form action="">
            <input type="email" placeholder="Email Address..." />
            <button>SUBMIT</button>
          </form>
        </section>

        <section className="banner">
          <img src={cover} alt="" />
          <p>Ad</p>
        </section>

        <RandomPosts />

        <section className="categorys">
          <Heading title="Categorys" />
          {/*<div className='items'>{allCat}</div>*/}
          {catgeory.map((val) => {
            return (
              <div className="category category1">
                <span>{val}</span>
              </div>
            );
          })}
          
        </section>

        <section className='gallery'>
        <Heading title='Gallery' />
        <Slider {...settings}>
              <div className='img'>
                <img src={cover} alt='' />
              </div>
              <div className='img'>
                <img src={cover} alt='' />
              </div>
              <div className='img'>
                <img src={cover} alt='' />
              </div>
              <div className='img'>
                <img src={cover} alt='' />
              </div>
              <div className='img'>
                <img src={cover} alt='' />
              </div>
        </Slider>
      </section>


      </>
    );
  }
}
