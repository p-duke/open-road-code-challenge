import React, { Component } from 'react';
import Comment from './Comment';
import missingImage from '../images/image-missing.jpg';
import { REDDIT_BASE_URL } from '../constants';
import { convertDate } from '../helpers';

class Post extends Component {
  constructor(props) {
    super();
    this.state = {
      comments: props.postData.pop().data.children,
      originalPost: props.postData.pop().data.children.pop().data
    };
  }

  render() {
    const post = this.state.originalPost;
    let comments = this.state.comments.map(comment => {
      return (
        <Comment comment={comment.data} children={
          comment.data.replies ? comment.data.replies.data.children : null} 
        />
      );
    });

    return (
      <div className="wrapper">
        <div className="row comment__post">
          <div className="column-1">
            <p>{post.score}</p>
          </div>
          <div className="column-1">
            <img src={!post.thumbnail.includes('redditmedia') ? missingImage : post.thumbnail } alt={post.title} />
          </div>
          <div className="column-10">
            <h4 data-url={REDDIT_BASE_URL + post.permalink}>
                {post.title}
              <span>({post.domain})</span>
            </h4>
            <p> submitted about {convertDate(post.created_utc)} by {post.author} to <a href={REDDIT_BASE_URL+post.subreddit_name_prefixed}> {post.subreddit_name_prefixed} </a> </p>
            <a href={REDDIT_BASE_URL + post.permalink}><p>{post.num_comments} comments</p></a>
          </div>
        </div>
        <div className="row">
          <div className="column-12 comment--underline">
            <h4>all {post.num_comments} comments</h4>
          </div>
        </div>
        <div className="wrapper">
          <ul className="comment">
            {comments}
          </ul>
        </div>
      </div>
    );
  }
}

export default Post;