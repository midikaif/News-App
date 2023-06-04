import React, { Component } from "react";
import Slider from "react-slick";
import HeaderCard from "./HeaderCard/HeaderCard";
import "./Header.css";
import SliderHeaderCard from "./SliderHeader/SliderHeaderCard";

export default class Header extends Component {
  render() {
    const { articles } = this.props;
    let settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    }

    return (
      <>
        <section className="hero">
          <div className="container">
          {/* <HeaderCard />
          <HeaderCard />
          <HeaderCard /> */}
            {
              articles.filter((val, i) => i < 3).map(article => <HeaderCard article={article}/>)
            }
            <Slider {...settings} className="boxtmp">
              <SliderHeaderCard />
              <SliderHeaderCard />
              <SliderHeaderCard />
              {/* {
                articles.filter((val, i) => i > 2).map(article => <SliderHeaderCard />)
              } */}
            </Slider>

          </div>
        </section>
      </>
    );
  }
}