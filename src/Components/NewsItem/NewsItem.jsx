import React, { Component } from 'react'
import './NewsItem.css'
export default class NewsItem extends Component {

    render() {
        let { title, desc, img, url } = this.props;
        return (
            <div className="card text-center h-100 ">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-danger">{title}</h5>
                    <p className="card-text">{desc}</p>
                    <a href={url} className="btn btn-primary ">Read More!</a>
                </div>
            </div>
        )
    }
}
