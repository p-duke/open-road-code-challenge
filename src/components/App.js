import React, { Component } from 'react';
import '../styles/App.css';
import axios from 'axios';
import { REDDIT_HOT_URL } from '../constants';
import PostList from './PostList';
import Pagination from './Pagination';
import Post from './Post';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      pageOfItems: [],
      viewPost: false,
      postData: [],
    };
    this.onChangePage = this.onChangePage.bind(this);
    this.viewPost = this.viewPost.bind(this);
  }

  componentDidMount() {
    axios.get(REDDIT_HOT_URL)
      .then(response => {
        this.setState({ posts: response.data.data.children });
      }).catch(err => {
        console.log(err);
      });
  }

  onChangePage(pageOfItems) {
    this.setState({ pageOfItems: pageOfItems });
  }

  viewPost(data) {
    const postUrl = data.target.parentElement.dataset.url;
    axios.get(`${postUrl}.json`)
      .then(response => {
        this.setState({ viewPost: true, postData: response.data });
      }).catch(err => {
        console.log(err);
      });

  }

  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Hot Posts!</h1>
        </header>
        { this.state.viewPost 
            ?  
              <Post postData={this.state.postData} />

            : 
            <div>
              <section className="wrapper">
                <PostList viewPost={this.viewPost} posts={this.state.pageOfItems} />
              </section>
              <section className="wrapper--center">
                <Pagination items={this.state.posts} onChangePage={this.onChangePage} />
              </section>
            </div>
        }
      </div>
    );
  }
}

export default App;
