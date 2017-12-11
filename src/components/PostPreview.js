import React from 'react';
import { REDDIT_BASE_URL } from '../constants';
import missingImage from '../images/image-missing.jpg';
import { convertDate, convertScore } from '../helpers';

const PostPreview = (props) => {
  const { post } = props;

  return (
    <div className="row">
      <div className="column-1">
        <p className="post-preview__score">{convertScore(post.data.score)}</p>
      </div>

      <div className="column-1">
        <img src={!post.data.thumbnail.includes('redditmedia') ? missingImage : post.data.thumbnail } alt={post.data.title} />
      </div>

      <div className="column-10">
        <h4 onClick={props.viewPost} data-url={REDDIT_BASE_URL + post.data.permalink}>
          <a href="#">{post.data.title}</a><span className="post-preview__title-url"> ({post.data.domain})</span>
        </h4>
        <p className="post-preview__subtext"> submitted about {convertDate(post.data.created_utc)} by {post.data.author} to <a href={REDDIT_BASE_URL+post.data.subreddit_name_prefixed}> {post.data.subreddit_name_prefixed} </a> </p>
        <a className="post-preview__comment" onClick={props.viewPost} href="#" data-url={REDDIT_BASE_URL + post.data.permalink}><p>{post.data.num_comments} comments</p></a>
      </div>
    </div>
  );

}

export default PostPreview;
