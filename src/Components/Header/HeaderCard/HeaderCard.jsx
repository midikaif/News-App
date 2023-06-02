import React, { Component } from 'react'
import cover from '../../../SampleImg/newsHeader.jpg'
import './HeaderCard.css'

export default class HeaderCard extends Component {
    render() {
    const {news} = this.props;
        return (
            <div className='box'>
                <div className='img'>
                    <img src={news.urlToImage?news.urlToImage:cover} alt='' />
                </div>
                <div className='text'>
                    <span className='category'>{news.source.name?news.source.name:'Unknown'}</span>
                    <a>
                        <h3 className='titleBg'>{news.title?news.title:'Unknown'}</h3>
                    </a>
                    <div className='author'>
                        <div>by '{news.author?news.author:'Unknown'}'</div>
                        <div>{new Date(news.publishedAt).toGMTString()}</div>
                    </div>
                </div>
            </div>
        )
    }
}
