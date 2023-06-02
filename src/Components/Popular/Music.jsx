import React, { Component } from "react";
import Slider from "react-slick";
import cover from "../../SampleImg/newsHeader.jpg";
import Heading from "../Heading/Heading";
import "./Music.css";

export default class Music extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "0",
      slidesToShow: 1,
      speed: 500,
      rows: 2,
      slidesPerRow: 1,
    };
    return (
      <>
        <section className="music">
          <Heading title="Music News" />
          <div className="content">
            <Slider {...settings}>
              <div className="items">
                <div className="box shadow flexSB">
                  <div className="images">
                    <div className="img">
                      <img src={cover} alt="" />
                    </div>
                    <div className="category category1">
                      <span>catgeory</span>
                    </div>
                  </div>
                  <div className="text">
                    <h1 className="title">title...</h1>
                    <div className="date">
                      <i className="fas fa-calendar-days"></i>
                      <label>date</label>
                    </div>
                    <p className="desc">desc....</p>
                    <div className="comment">
                      <label>Share / </label>
                      <label>comments</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="items">
                <div className="box shadow flexSB">
                  <div className="images">
                    <div className="img">
                      <img src={cover} alt="" />
                    </div>
                    <div className="category category1">
                      <span>catgeory</span>
                    </div>
                  </div>
                  <div className="text">
                    <h1 className="title">title...</h1>
                    <div className="date">
                      <i className="fas fa-calendar-days"></i>
                      <label>date</label>
                    </div>
                    <p className="desc">desc....</p>
                    <div className="comment">
                      <label>Share / </label>
                      <label>comments</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="items">
                <div className="box shadow flexSB">
                  <div className="images">
                    <div className="img">
                      <img src={cover} alt="" />
                    </div>
                    <div className="category category1">
                      <span>catgeory</span>
                    </div>
                  </div>
                  <div className="text">
                    <h1 className="title">title...</h1>
                    <div className="date">
                      <i className="fas fa-calendar-days"></i>
                      <label>date</label>
                    </div>
                    <p className="desc">desc....</p>
                    <div className="comment">
                      <label>Share / </label>
                      <label>comments</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="items">
                <div className="box shadow flexSB">
                  <div className="images">
                    <div className="img">
                      <img src={cover} alt="" />
                    </div>
                    <div className="category category1">
                      <span>catgeory</span>
                    </div>
                  </div>
                  <div className="text">
                    <h1 className="title">title...</h1>
                    <div className="date">
                      <i className="fas fa-calendar-days"></i>
                      <label>date</label>
                    </div>
                    <p className="desc">desc....</p>
                    <div className="comment">
                      <label>Share / </label>
                      <label>comments</label>
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
