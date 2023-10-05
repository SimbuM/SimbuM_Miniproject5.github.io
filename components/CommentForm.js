import React, { useState } from 'react';
function CommentForm({ onCommentSubmit }) {
  const [comment, setComment] = useState('');
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onCommentSubmit(comment);
    setComment('');
  };
  return (
    <div>
      <h3>Add a Comment</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Write your comment here..."
          value={comment}
          onChange={handleCommentChange}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default CommentForm;
