import React, { useEffect, useState } from 'react';
import Todo from '../Todo/Todo';
import './Todos.css'

const Todos = () => {
  const [todos, setDodos] = useState([])
useEffect(()=>{
fetch(`https://jsonplaceholder.typicode.com/todos`)
.then(res => res.json())
.then(data => setDodos(data))
}, [])

const todoListStyle ={
  backgroundColor: "lightsteelblue",
  margin: "20px",
  padding: "10px",
  border: "2px solid red",
  borderRadius: "10px",
  boxShadow: "10px 5px 10px gray"
}
  return (

    <div className='heading-todo'>
      <h1 style={todoListStyle}>Todo List: {todos.length}</h1>

    <div className='todo-lists'>
      {
        todos.map(todo => <Todo
        key={todo.id}
        todo={todo}
        ></Todo>)
      }
    </div>
    </div>
  );
};

export default Todos;