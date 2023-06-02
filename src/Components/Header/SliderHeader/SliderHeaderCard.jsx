import React, { Component } from 'react'
import cover from '../../../SampleImg/newsHeader.jpg'
import './SliderHeaderCard.css'

export default class SliderHeaderCard extends Component {
    render() {
        const {news} = this.props;
        return (
            <div className='slider-box'>
                <div className='img'>
                    <img src={news.urlToImage?news.urlToImage:cover} alt='' />
                </div>
                <div className='text'>
                    <span className='category'>{news.source.name?news.source.name:'Unknown'}</span>
                    <a>
                        <h1 className='titleBg'>{news.title?news.title:'Unknown'}</h1>
                    </a>
                    <div className='author'>
                        <span>by '{news.author?news.author:'Unknown'}'</span>
                        <span>{new Date(news.publishedAt).toGMTString()}</span>
                    </div>
                </div>
            </div>
        )
    }
}
