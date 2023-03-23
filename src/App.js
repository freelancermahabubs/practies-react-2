import './App.css';
import Blog from './blog/Blog/Blog';
import Mobile from './moblie/Mobile';
import Todos from './todo/Todos/Todos';

function App() {
  return (
    <div className="App">
     <Blogs></Blogs>
     <Blog heading ={'This is Heading'} author ={'Mahabub'}></Blog>
     <Blog heading={'This is 2nd Heading'} author ={'Jibon'}></Blog>
     <Blog heading={'This is 3rd Heading'} author ={'Antor'}></Blog>
     <Mobile></Mobile>
     <Todos></Todos>
    </div>
  );
}

const articleStyle ={
  backgroundColor: 'yellow',
  padding: '10px',
  margin: '20px',
  borderRadius: '15px',
  color: 'black'
}
function Blogs(){
  return(
    <div>

      <article className='blog '>
      <h1 style={articleStyle}>Welcome To Our Blogs</h1>
        React is a declarative, efficient, and flexible JavaScript library for
building user interfaces or UI components. It lets you compose complex UIs
from small and isolated pieces of code called “components”.

It is used by large, established companies and newly-minted startups 
alike (Netflix, Airbnb, Instagram, and the New York Times, to name a few). 
React brings many advantages to the table, making it a better choice 
than other frameworks like Angular.js.
<p style={{backgroundColor:'yellowgreen', color:'black', border:'2px solid red'}}>This is Paragraph</p>
</article>
    </div>
  )
}



export default App;
