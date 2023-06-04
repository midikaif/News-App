import React, { Component } from 'react'
import cover from '../../../SampleImg/newsHeader.jpg'
import './HeaderCard.css'

export default class HeaderCard extends Component {
    render() {
        const { news } = this.props;
        return (
            <div className='box'>
                <div className='img'>
                    <img src={news.media ? news.media : cover} alt='' />
                </div>
                <div className='text'>
                    <span className='category'>{'Unknown'}</span>
                    <a>
                        <h3 className='titleBg'>{'Unknown'}</h3>
                    </a>
                    <div className='author'>
                        <div>by '{'Unknown'}'</div>
                        <div>{'new Date().toGMTString()'}</div>
                    </div>
                </div>
            </div>
        )
    }
}
