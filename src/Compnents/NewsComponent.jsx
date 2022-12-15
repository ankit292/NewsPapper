import React, { Component } from 'react'
import Loder from './Loder';
import News from './News';
import axios from 'axios';
import PropTypes from 'prop-types'


export class NewsComponent extends Component {
  constructor(props){
    super(props);
    this.state ={
        articles: [],
        loading: false,
        page: 1,
        country: this.props.propgetCountry
    }
  }
  static defaultProps = {
    category:'general'
  } 

  static propTypes = {
    category: PropTypes.string
  }
     componentDidMount(){
      let url=`https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.props.category}&apiKey=74f320263ade4fbebd2d6d417c3ba957&page=1&pageSize=${this.props.pageSize}`
      axios.get(url)
      .then((res)=>{
        this.setState({
          articles: res.data.articles, 
          totalArticals: res.data.totalResults,
          loading: false,
          country: this.props.propgetCountry
        })

      })
      }

      componentDidUpdate(prevProps, prevState){
        let ctCode = this.props.propgetCountry
        if(prevState && prevState.country !== ctCode){
          this.setState({country: ctCode})
           console.log(this.state.country)
          let url=`https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.props.category}&apiKey=74f320263ade4fbebd2d6d417c3ba957&page=1&pageSize=${this.props.pageSize}`
        axios.get(url)
        .then((res)=>{
          this.setState({
            articles: res.data.articles, 
            totalArticals: res.data.totalResults,
            loading: false,
            country: this.props.propgetCountry
          })

        })
        }
      }
    

      
     
     
    // async  componentDidMount(){
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.propgetCountry}&apiKey=74f320263ade4fbebd2d6d417c3ba957&page=1&pageSize=${this.props.pageSize}`;
    //     this.setState({loading: true});
    //     let urlData = await fetch(url);
    //     let urlJson = await urlData.json();
    //     this.setState({
    //       articles: urlJson.articles, 
    //       totalArticals: urlJson.totalResults,
    //       loading: false,
    //       country: this.props.propgetCountry
    //     })
    //     console.log(url)
    //   }
      
      handlePrev = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.propgetCountry}&category=${this.props.category}&apiKey=74f320263ade4fbebd2d6d417c3ba957&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
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
          let url = `https://newsapi.org/v2/top-headlines?country=${this.props.propgetCountry}&category=${this.props.category}&apiKey=74f320263ade4fbebd2d6d417c3ba957&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
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
      <h1 className='text-center my-5'>NewsMonkey - Top Headlines</h1>
        <div className='row' style={{minHeight:'80vh'}}>
        {!this.state.loading && this.state.articles.map((element)=>{ 
            return <div className='col-md-4 mb-4 ' key={element.url}>
                    <News title={element.title?element.title:''} description={element.description?element.description:''} urlToImage={element.urlToImage} url={element.url} date={element.publishedAt} author={element.author}/>
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
