import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { REDDIT_HOT_URL } from './constants';
import PostList from './PostList';
import Pagination from './Pagination';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      pageOfItems: [],
    };
    this.onChangePage = this.onChangePage.bind(this);
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

  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Hot Posts!</h1>
        </header>
        <PostList posts={this.state.pageOfItems} />
        <Pagination items={this.state.posts} onChangePage={this.onChangePage} />
      </div>
    );
  }
}

export default App;
