import React from 'react';
function BlogPost({ movie, content, actor,img }) {
  return (
    <div
    style={{
      backgroundImage:{img}
    }}
    >
      <h2>{movie}</h2>
      <p
      >{content}</p>
      <p>Actor {actor} on {date}</p>
    </div>
  );
}
export default BlogPost;
