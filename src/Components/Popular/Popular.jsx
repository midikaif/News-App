import React, { Component } from "react";
import Heading from "../Heading/Heading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cover from "../../SampleImg/newsHeader.jpg";
import "./Popular.css";

export default class Popular extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: false,
      infinite: true,
      centerPadding: "0",
      slidesToShow: 2,
      speed: 500,
      rows: 4,
      slidesPerRow: 1,
      dots: false,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            // infinite: true,
            // rows: 4,
          }
        }      
      ]
    };

    return (
      <>
        <section className="popular">
          <Heading title={'popular'}/>
          <div className="content">
            <Slider {...settings}>
            <div className="items">
              <div className="box shadow">
                <div className="images row">
                  <div className="img">
                    <img
                      src={cover}
                      alt="sample"
                    />
                  </div>
                  <div className="category category1">
                    <span>Category</span>
                  </div>
                </div>
                <div className="text row">
                  <h1 className="title">Sample heading</h1>
                  <div className="date">
                    <label >28/12/12</label>
                  </div>
                  <div className="comment">
                    <label >Sample Comment</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="items">
              <div className="box shadow">
                <div className="images row">
                  <div className="img">
                    <img
                      src={cover}
                      alt="sample"
                    />
                  </div>
                  <div className="category category1">
                    <span>Category</span>
                  </div>
                </div>
                <div className="text row">
                  <h1 className="title">Sample heading</h1>
                  <div className="date">
                    <label >28/12/12</label>
                  </div>
                  <div className="comment">
                    <label >Sample Comment</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="items">
              <div className="box shadow">
                <div className="images row">
                  <div className="img">
                    <img
                      src={cover}
                      alt="sample"
                    />
                  </div>
                  <div className="category category1">
                    <span>Category</span>
                  </div>
                </div>
                <div className="text row">
                  <h1 className="title">Sample heading</h1>
                  <div className="date">
                    <label >28/12/12</label>
                  </div>
                  <div className="comment">
                    <label >Sample Comment</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="items">
              <div className="box shadow">
                <div className="images row">
                  <div className="img">
                    <img
                      src={cover}
                      alt="sample"
                    />
                  </div>
                  <div className="category category1">
                    <span>Category</span>
                  </div>
                </div>
                <div className="text row">
                  <h1 className="title">Sample heading</h1>
                  <div className="date">
                    <label >28/12/12</label>
                  </div>
                  <div className="comment">
                    <label >Sample Comment</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="items">
              <div className="box shadow">
                <div className="images row">
                  <div className="img">
                    <img
                      src={cover}
                      alt="sample"
                    />
                  </div>
                  <div className="category category1">
                    <span>Category</span>
                  </div>
                </div>
                <div className="text row">
                  <h1 className="title">Sample heading</h1>
                  <div className="date">
                    <label >28/12/12</label>
                  </div>
                  <div className="comment">
                    <label >Sample Comment</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="items">
              <div className="box shadow">
                <div className="images row">
                  <div className="img">
                    <img
                      src={cover}
                      alt="sample"
                    />
                  </div>
                  <div className="category category1">
                    <span>Category</span>
                  </div>
                </div>
                <div className="text row">
                  <h1 className="title">Sample heading</h1>
                  <div className="date">
                    <label >28/12/12</label>
                  </div>
                  <div className="comment">
                    <label >Sample Comment</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="items">
              <div className="box shadow">
                <div className="images row">
                  <div className="img">
                    <img
                      src={cover}
                      alt="sample"
                    />
                  </div>
                  <div className="category category1">
                    <span>Category</span>
                  </div>
                </div>
                <div className="text row">
                  <h1 className="title">Sample heading</h1>
                  <div className="date">
                    <label >28/12/12</label>
                  </div>
                  <div className="comment">
                    <label >Sample Comment</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="items">
              <div className="box shadow">
                <div className="images row">
                  <div className="img">
                    <img
                      src={cover}
                      alt="sample"
                    />
                  </div>
                  <div className="category category1">
                    <span>Category</span>
                  </div>
                </div>
                <div className="text row">
                  <h1 className="title">Sample heading</h1>
                  <div className="date">
                    <label >28/12/12</label>
                  </div>
                  <div className="comment">
                    <label >Sample Comment</label>
                  </div>
                </div>
              </div>
            </div>
            </Slider>
          </div>
        </section>
      </>
    );
  }
}
