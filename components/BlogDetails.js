import React, { useState } from 'react';
import CommentForm from './CommentForm';
function BlogDetails({ post }) {
  const [comments, setComments] = useState(post.comments || []);

  const handleCommentSubmit = (newComment) => {
    setComments([...comments, newComment]);
  };
  return (
    <div>
      <h2>{post.movie}</h2>
      <p>{post.content}</p>
      <p>Actor {post.actor}</p>
      <h3>Comments</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
      <CommentForm onCommentSubmit={handleCommentSubmit} />
    </div>
  );
}
export default BlogDetails;
