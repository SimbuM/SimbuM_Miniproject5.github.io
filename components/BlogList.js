import React, { useState } from 'react';
import PostTitle from './PostTitle';
function BlogList({ posts, handleClick }) {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredPosts = posts.filter(post =>
    post.movie.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <input
        type="text"
        placeholder="Search Movies"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      {filteredPosts.map(post => (
        <div key={post.id} onClick={() => handleClick(post.id)}>
          <PostTitle movie={post.movie} />
        </div>
      ))}
    </div>
  );
}
export default BlogList;
