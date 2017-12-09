import React from 'react';
import { REDDIT_BASE_URL } from './constants';
import missingImage from './images/image-missing.jpg';

const PostPreview = (props) => {
  const { post } = props;
  return (
    <li className='post-card'>
      <div className='post-card__score'>
        <p>{post.data.score}</p>
      </div>
      <img className='post-card__thumbnail' src={!post.data.thumbnail.includes('redditmedia') ? missingImage : post.data.thumbnail } alt={post.data.title} />
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
  </li>
  );

}

export default PostPreview;
