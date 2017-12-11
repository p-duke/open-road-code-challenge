import React, { Component } from 'react';
import { convertDate } from '../helpers';

class Comment extends Component {
  render() {
    let childnodes = null;

    if (this.props.children) {
      childnodes = this.props.children.map((childnode, key) => {
        return (
          <Comment key={key} comment={childnode.data} children={childnode.data.replies ? childnode.data.replies.data.children : null} />
        );
      });
    }

    if (!this.props.comment.body) {
      return (
        null
      );
    }

    return (
      <div className="row">
        <li className="column-12" key={this.props.comment.id}>
          <p className="comment--topbar"><span className="comment__topbar--orange">{this.props.comment.author}</span> {this.props.comment.score} points {convertDate(this.props.comment.created_utc)}</p>
          <p>{this.props.comment.body}</p>
          { childnodes
              ?
              <ul>{childnodes}</ul>
              :
              null
          }
        </li>
      </div>
    );
  }
}

export default Comment;
