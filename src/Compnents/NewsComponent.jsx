import React, { Component } from 'react'
import Loder from './Loder';
import News from './News'

export class NewsComponent extends Component {
    
      constructor(){
        super();
        this.state ={
            articles: [],
            loading: false,
            page: 1
        }
      }
    async  componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=74f320263ade4fbebd2d6d417c3ba957&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let urlData = await fetch(url);
        let urlJson = await urlData.json();
        this.setState({
          articles: urlJson.articles, 
          totalArticals: urlJson.totalResults,
          loading: false
        })
      }
      handlePrev = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=74f320263ade4fbebd2d6d417c3ba957&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let urlData = await fetch(url);
        let urlJson = await urlData.json();
        this.setState({
          articles: urlJson.articles, 
          page: this.state.page - 1,
          loading: false
        });
      }
      handleNex= async ()=>{
        if (!(this.state.page + 1 > Math.ceil(this.state.totalArticals/this.props.pageSize))) {
          let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=74f320263ade4fbebd2d6d417c3ba957&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
          this.setState({loading: true});
          let urlData = await fetch(url);
          let urlJson = await urlData.json();
          this.setState({
            articles: urlJson.articles, 
            page: this.state.page + 1,
            loading: false
          });
        }
          
      } 
  render() {
    return (
      <div className='container my-4'>
      {this.state.loading && <Loder/>}
      <h1 className='mb-4'>NewsMonkey - Top Headlines</h1>
        <div className='row' style={{minHeight:'80vh'}}>
        {!this.state.loading && this.state.articles.map((element)=>{ 
            return <div className='col-md-4 mb-4 ' key={element.url}>
                    <News title={element.title?element.title:''} description={element.description?element.description:''} urlToImage={element.urlToImage} url={element.url}/>
                </div> 
             })}
             
        </div>
        <div className='d-flex justify-content-between'>
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrev}>&larr; Previus</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalArticals/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNex}>Next &rarr;</button>
          </div>
      </div>
    )
  }
}

export default NewsComponent
