import React, { Component } from 'react'
import cover from '../../../SampleImg/newsHeader.jpg'
import './SliderHeaderCard.css'

export default class SliderHeaderCard extends Component {
    render() {
        const {news} = this.props;
        return (
            <div className='slider-box'>
                <div className='img'>
                    <img src={cover} alt='' />
                </div>
                <div className='text'>
                    <span className='category'>{'Unknown'}</span>
                    <a>
                        <h1 className='titleBg'>{'Unknown'}</h1>
                    </a>
                    <div className='author'>
                        <span>by '{'Unknown'}'</span>
                        <span>{'new Date().toGMTString()'}</span>
                    </div>
                </div>
            </div>
        )
    }
}
