import React, { Component } from "react";
import "./Home.css";
import Header from "../Header/Header";
import HomeContent from "../HomeContent/HomeContent";
import Discover from "../Discover/Discover";
import Footer from "../Footer/Footer";
import NavHeader from "../NavHeader/NavHeader";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      article: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {

    this.setState({ loading: true });
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${this.props.apiKey}`;
    const data = await fetch(url);
    const parsedData = await data.json();
    this.setState({
      loading: false,
      article: parsedData.articles,
      totalResults: parsedData.totalResults,
      page: 1,
    });
  }

  render() {
    return (
      <>
        <NavHeader/>
        <Header articles={this.state.article} />
        <HomeContent />
        <Discover />
        <Footer/>
      </>
    );
  }
}

// import React, { Component } from 'react'
// import Header from '../Header/Header';

// export default class Home extends Component {
//     constructor() {
//         super();
//         this.state = {
//             article: [],
//             loading: false,
//             page: 1
//         }
//     }

//     async componentDidMount() {
//         this.setState({ loading: true })
//         const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=e67ce43eb21548b9a76592960f15ee7b&page=${this.state.page}&pageSize=8`;
//         const data = await fetch(url);
//         const parsedData = await data.json();
//         console.log(parsedData.articles)
//         this.setState({
//             loading: false,
//             article: parsedData.articles,
//             totalResults: parsedData.totalResults,
//             page: 1
//         })
//     }

//     render() {
//         return (
//             <>
//                 <Header article={this.state.article.articles} />
//             </>
//         )
//     }
// }
