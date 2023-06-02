import React, { Component } from "react";

export default class SocialMedia extends Component {
  render() {
    return (
      <>
        <section className="social">
          <div className="socBox">
            <span>12,740 Likes</span>
          </div>
          <div className="socBox">
            <span>5,600 Fans</span>
          </div>
          <div className="socBox">
            <span>8,700 Followers</span>
          </div>
          <div className="socBox">
            <span>22,700 Followers</span>
          </div>
          <div className="socBox">
            <span>2,700 Subscriber</span>
          </div>
        </section>
      </>
    );
  }
}
