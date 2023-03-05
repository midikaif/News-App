import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
    article = [
        {
            "source": {
                "id": null,
                "name": "The Official Website of the Ultimate Fighting Championship"
            },
            "author": null,
            "title": "Weigh-In Results | UFC 285: Jones vs Gane - UFC",
            "description": "The Fighters Step On The Scale To Make It Official For Saturday's Las Vegas Mega-Event",
            "url": "https://www.ufc.com/news/official-weigh-in-results-ufc-285-jones-vs-gane-shechenko-vs-grasso",
            "urlToImage": "https://dmxg5wxfqgb4u.cloudfront.net/styles/card/s3/2023-03/030423-jon-jones-ciryl-gane-weigh-in-thumb-ufc-285.jpg?itok=WJ6IrRIS",
            "publishedAt": "2023-03-03T18:31:41Z",
            "content": "Before Jon Jones and Ciryl Gane battle it out for the undisputed heavyweight title on March 4 in Las Vegas, the most dominant champion in the UFC will defend her flyweight crown at T-Mobile Arena, as… [+519 chars]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Teo Armus, Rachel Lerman",
            "title": "Amazon to pause construction at HQ2 in Arlington - The Washington Post",
            "description": "The move adds delays to a multiyear plan to bring 25,000 employees to its new offices in Northern Virginia as it cuts jobs elsewhere in the country.",
            "url": "https://www.washingtonpost.com/dc-md-va/2023/03/03/amazon-hq2-construction-delay-arlington/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/2ZCCRNWCNYI6ZIOSY4MXVYZIME_size-normalized.jpg&w=1440",
            "publishedAt": "2023-03-03T18:29:00Z",
            "content": "Comment on this story\r\nAmazon will pause construction at the second headquarters it is building in Arlington, the company confirmed Friday, a major setback for the e-commerce giant that just years ag… [+5580 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Michael Sainato",
            "title": "Ford seeks to remotely repossess cars after missed payments in US patent - The Guardian",
            "description": "Automaker would remotely disable the vehicle or a component of the vehicle if delinquency notice isn’t acknowledged",
            "url": "https://www.theguardian.com/business/2023/mar/03/ford-reposses-patent-remote-lock",
            "urlToImage": "https://i.guim.co.uk/img/media/2b523b2982fa460c3af5cfaac375dd38f1858f84/0_150_5472_3283/master/5472.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=79836f77361be0fd6c79ac4ca6098252",
            "publishedAt": "2023-03-03T17:50:00Z",
            "content": "Behind on your car payments? Your car could soon be driving itself to the pound. Ford Motor Company has applied for a patent that would enable a computer to disable a vehicle or component of a vehicl… [+2566 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Alayna Treene, Steve Contorno",
            "title": "Ron DeSantis knocks Republicans who act 'like potted plants' in remarks to GOP donors - CNN",
            "description": "Florida Gov. Ron DeSantis used a 40-minute speech before a room full of donors Thursday night to cement himself as the governor who will go places other Republicans will not -- characterizing other GOP leaders as sitting back \"like potted plants,\" according t…",
            "url": "https://www.cnn.com/2023/03/03/politics/republican-donors-club-growth-ron-desantis/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230303103418-02-ron-desantis-file.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-03-03T16:24:00Z",
            "content": "Florida Gov. Ron DeSantis used a 40-minute speech before a room full of donors Thursday night to cement himself as the governor who will go places other Republicans will not characterizing other GOP … [+2286 chars]"
        }]

    constructor() {
        super();
        this.state = {
            article: this.article
        }
    }

    render() {
        return (
            <div className="cHeader">

                <div id="carouselExampleCaptions" className="carousel slide float-center" data-bs-ride="false">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div className="carousel-inner ">
                        {this.state.article.map((elem,i) => (
                            <div key={i} className={`carousel-item ${i==0 ? 'active' : ''}` }>
                                <div className="d-block">
                                    <img src={elem.urlToImage} className="c-img" alt="..." />
                                    <div className="overlay"></div>
                                </div>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>{elem.title}</h5>
                                    <p>{elem.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        )
    }
}
