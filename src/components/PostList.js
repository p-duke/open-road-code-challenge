import React from 'react';
import PostPreview from './PostPreview';

const PostList = (props) => {
  const { posts } = props;

  return (
    <div>
      <ul className='post-preview'>
        { posts
            ? posts.map((post, key) => {
              return <PostPreview viewPost={props.viewPost} key={key} post={post} />
            })
            : <p>Loading...</p>
        }
      </ul>
    </div>
  );
};

export default PostList;
