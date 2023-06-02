import React, { Component } from "react";
import Slider from "react-slick";
import HeaderCard from "./HeaderCard/HeaderCard";
import "./Header.css";
import SliderHeaderCard from "./SliderHeader/SliderHeaderCard";

export default class Header extends Component {
  render() {
    const { articles } = this.props;
    let settings = {
      dots: true,
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
              articles.map((article, i) => {
                if (i < 3) {
                  return <HeaderCard news={article} />
                }
                return '';
              })
            }
            <Slider {...settings} className="boxtmp">
              {
                articles.map((article, i) => {
                  if (i > 2) {
                    return <SliderHeaderCard news={article} />
                  }
                })
              }
            </Slider>

          </div>
        </section>
      </>
    );
  }
}