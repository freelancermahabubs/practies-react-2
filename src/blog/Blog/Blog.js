import React from 'react';
import './Blog.css'
const Blog = (props) => {
  const {heading, author} = props;
  return (
    <div className='header'>
   <h1>Header: {heading}</h1>
   <p>Author: {author}</p>
    </div>
  );
};

export default Blog;