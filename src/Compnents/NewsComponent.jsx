import React, { Component } from "react";
import Loder from "./Loder";
import News from "./News";
import axios from "axios";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class NewsComponent extends Component {
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      country: this.props.propgetCountry,
      totalResults: 0,
      id: 1
    };
    document.title = this.capitalizeFirstLetter(`${this.props.category}`);
  }
  static defaultProps = {
    category: "general",
    bgColor: "background:red",
  };

  static propTypes = {
    category: PropTypes.string,
    bgColor: PropTypes.string,
  };

  updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.props.category}&apiKey=74f320263ade4fbebd2d6d417c3ba957&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    axios.get(url).then((res) => {
      this.setState({
        articles: res.data.articles,
        totalArticals: res.data.totalResults,
        loading: false,
        country: this.props.propgetCountry,
        id: this.props.id + 1
      });
    });
  }
  fetchData = ()=>{
    this.setState({page: this.state.page + 1 })
   
    let url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.props.category}&apiKey=74f320263ade4fbebd2d6d417c3ba957&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    axios.get(url).then((res) => {
      setTimeout(() => {
        this.setState({
          articles: this.state.articles.concat(res.data.articles),
          totalResults: res.data.totalResults,
          country: this.props.propgetCountry,
          loading: false,
          id: this.props.id + 1
        });
      }, 1500);
     
    });
  }
  componentDidMount() {
    this.updateNews();
  }

  componentDidUpdate(prevProps, prevState) {
    let ctCode = this.props.propgetCountry;
    if (prevState && prevState.country !== ctCode) {
      this.setState({ country: ctCode });
      this.updateNews();
    }
  }

  // handlePrev = async () => {
  //   this.setState({ page: this.state.page - 1 });
  //   this.updateNews();
  // };
  // handleNex = async () => {
  //   this.setState({ page: this.state.page + 1 });
  //   this.updateNews();
  // };

  render() {
    let bgSetColor = this.props.bgColor;

    return (
      <div style={{ background: bgSetColor }}>
        <div className="container py-4" style={{minHeight:'100vh'}}>
          
          <h1 className="text-center py-5">
            NewsMonkey - Top{" "}
            {this.capitalizeFirstLetter(`${this.props.category}`)} Headlines
          </h1>
          {this.state.loading && <Loder style={{position: "fixed",top: "50%",left: "50%",transform: "translate(-50%, -50%)"}}/>}
          <InfiniteScroll
            dataLength={this.state.articles.length} //This is important field to render the next data
            next={this.fetchData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Loder />}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
         <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                  return (
                    <div className="col-md-4 mb-4 " key={element.id}>
                      <News
                        title={element.title ? element.title : ""}
                        description={
                          element.description ? element.description : ""
                        }
                        urlToImage={element.urlToImage}
                        url={element.url}
                        date={element.publishedAt}
                        author={element.author}
                      />
                    </div>
                  
                  );
                })}
            </div>
          </div>
          </InfiniteScroll>
          {/* <div className="d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark"
              onClick={this.handlePrev}
            >
              &larr; Previus
            </button>
            <button
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalArticals / this.props.pageSize)
              }
              type="button"
              className="btn btn-dark"
              onClick={this.handleNex}
            >
              Next &rarr;
            </button>
          </div> */}
        </div>
      </div>
    );
  }
}

export default NewsComponent;
