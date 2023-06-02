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
            {
              articles.filter((val, i) => i < 3).map((article, i) => <HeaderCard news={article} />)
            }
            <Slider {...settings} className="boxtmp">
              {
                articles.filter((val, i) => i > 2).map(article => <SliderHeaderCard news={article} />)
              }
            </Slider>

          </div>
        </section>
      </>
    );
  }
}