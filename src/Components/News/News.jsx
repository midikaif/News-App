import React, { Component } from 'react'
import Header from '../Header/Header'
import NewsItem from '../NewsItem/NewsItem'

export default class News extends Component {

  constructor() {
    super();
    this.state = {
      article: [],
      loading: false,
      page: 1
    }
  }

  async componentDidMount() {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=e67ce43eb21548b9a76592960f15ee7b&page=${this.state.page}&pageSize=8`;
    const data = await fetch(url);
    const parsedData = await data.json();
    this.setState({
      article: parsedData.articles,
      totalResults: parsedData.totalResults,
      page: 1
    })
    // console.log(this.state);
  }

  handleNext = async () => {
    if (this.state.page + 1 <= Math.ceil(this.state.totalResults / 8)) {
      const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=e67ce43eb21548b9a76592960f15ee7b&page=${this.state.page + 1}&pageSize=8`;
      const data = await fetch(url);
      const parsedData = await data.json();
      this.setState({
        article: parsedData.articles,
        page: this.state.page + 1,
        totalResults: parsedData.totalResults

      })
    }
  }

  handlePrevious = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=e67ce43eb21548b9a76592960f15ee7b&page=${this.state.page - 1}&pageSize=8`;
    const data = await fetch(url);
    const parsedData = await data.json();
    this.setState({
      article: parsedData.articles,
      page: this.state.page - 1,
      totalResults: parsedData.totalResults

    })
  }


  render() {
    return (
      <div className="container my-3">
        <Header />
        <div className="row my-5">
          {this.state.article.map((elem) => (
            (elem.title && elem.description && elem.urlToImage) &&
            <div key={elem.url} div className="col-md-4 my-4" >
              <NewsItem key={elem.url} title={elem.title} desc={elem.description} img={elem.urlToImage} url={elem.url} />
            </div>

          ))}
        </div>
        <div className="d-flex container justify-content-between">
          <button disabled={this.state.page < 2 ? true : false} type='button' className='btn btn-dark' onClick={this.handlePrevious}>&larr; Previous</button>
          <button disabled={this.state.page + 1 <= Math.ceil(this.state.totalResults / 8) ? false : true} type='button' className='btn btn-dark' onClick={this.handleNext}>Next &rarr;</button>
        </div>
      </div >
    )
  }
}
