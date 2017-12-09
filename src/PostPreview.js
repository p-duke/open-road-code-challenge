import React from 'react';
import { REDDIT_BASE_URL } from './constants';
import missingImage from './images/image-missing.jpg';

const PostPreview = (props) => {
  const { post } = props;
  return (
    <div className="row">
      <div className="column-2">
        <p>{post.data.score}</p>
      </div>
      <div className="column-3">
        <img className='post-card__thumbnail' src={!post.data.thumbnail.includes('redditmedia') ? missingImage : post.data.thumbnail } alt={post.data.title} />
      </div>
      <div className="column-7">
        <h4 className='post-card__title'>
          <a href={REDDIT_BASE_URL + post.data.permalink}>
            {post.data.title}
          </a>
          <p>({post.data.domain})</p>
        </h4>
        <p>
          submitted 4 hours ago by {post.data.author} to
          <a href={REDDIT_BASE_URL+post.data.subreddit_name_prefixed}>
            {post.data.subreddit_name_prefixed}
          </a>
        </p>
        <a href={REDDIT_BASE_URL + post.data.permalink}><p>{post.data.num_comments} comments</p></a>
      </div>
    </div>
  );

}

export default PostPreview;
