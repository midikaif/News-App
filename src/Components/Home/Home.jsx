import React, { Component } from 'react'
import Header from '../Header/Header';
import './Home.css'

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            article: [],
            loading: false,
            page: 1
        }
    }
    
    async componentDidMount() {
        this.setState({ loading: true })
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=e67ce43eb21548b9a76592960f15ee7b&page=${this.state.page}&pageSize=8`;
        const data = await fetch(url);
        const parsedData = await data.json();
        this.setState({
            loading: false,
            article: parsedData.articles,
            totalResults: parsedData.totalResults,
            page: 1
        })
        console.log(this.state.article)
    }

    render() {
        return (
            <>
                <Header article={this.state.article} />
            </>
        )
    }
}
