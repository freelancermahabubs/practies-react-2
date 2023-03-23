import React, { memo } from 'react';
import './Todo.css'

const Todo = memo((props) => {
  const {title, completed, id, userId} = props.todo
  return (
    <div className='todo-list'>
      <h2>Complete: {completed? "true" : "false"}</h2>
      <p>Id: {id}</p>
      <p>Title: {title}</p>
      <p>UserId: {userId}</p>
    </div>
  );
});

export default Todo;