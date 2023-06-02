import React, { Component } from 'react'
import './NewsItem.css'
export default class NewsItem extends Component {

    render() {
        let { title, desc, img, url, author, date, source } = this.props;
        return (
            <div className="card text-center h-100 ">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-danger">{title}
                        <span className="badge text-bg-warning mx-2">{source}</span>
                    </h5>
                    <p className="card-text">{desc}</p>
                    <p className="card-text"><small className='text-muted'> Published by {author ? author : 'Unknown'} at {new Date(date).toGMTString()}</small></p>
                    <a href={url} className="btn btn-primary ">Read More!</a>
                </div>
            </div>
        )
    }
}
