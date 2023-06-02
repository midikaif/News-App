import React, { Component } from "react";
import "./HomeContent.css";
import Popular from "../Popular/Popular";
import SecPopular from "../Popular/SecPopular";
import ThirdPopular from "../Popular/ThirdPopular";
import Music from "../Popular/Music";
import Side from "../SideContent/Side";

export default class HomeContent extends Component {
  render() {
    return (
      <main>
        <div className="container">
          <section className="mainContent">
            <Popular />
            <SecPopular />
            <ThirdPopular />
            <Music />
          </section>
          <section className="sideContent">
            <Side />
          </section>
        </div>
      </main>
    );
  }
}
