import React, { Component } from 'react'

export class News extends Component {
   

     
  render() {
    let {title, description, urlToImage, url, date, author} = this.props;
    return (
            <div className="card h-100">
                <img src={!urlToImage? 'http://cdn.wionews.com/sites/default/files/2022/12/14/318052-new-wion.png':urlToImage} className="card-img-top" alt="..." style={{height:'200px'}}/>
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <small><b> {!author?'Uknown':author}</b><br/> Last Updete: {new Date(date).toDateString()} <br/>
                    {new Date(date).toLocaleTimeString()}</small><br/>
                    <a href={url} target='_blank' rel="noreferrer" className="btn btn-success btn-sm my-2">Read More</a>
                </div>
            </div> 
    )
  }
}

export default News
