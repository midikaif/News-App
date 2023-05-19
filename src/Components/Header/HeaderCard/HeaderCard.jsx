import React, { Component } from 'react'
import './HeaderCard.css'

export default class HeaderCard extends Component {
    render() {
        let { title, author, url, img } = this.props;
        // console.log(img);
        return (
            <div className='box'>
                <div className='img'>
                    <img src={img} alt='' />
                </div>
                <div className='text'>
                    {/* <span className='category'>catgeory</span> */}
                    <a href={`${url}`}>
                        <h1 className='titleBg'>{title}</h1>
                    </a>
                    <div className='author flex'>
                        <span>by {author ? author : 'Unknown'}</span>
                        <span>time</span>
                    </div>
                </div>
            </div>
        )
    }
}
