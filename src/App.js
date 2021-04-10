import logo from './logo.svg';
import './App.css';
import useCount from './components/count';
import usePost from './components/posts';
import { useEffect } from 'react';
import PostList from './components/postList';


function App() {
  const {count, increment} = useCount(-2)
  const {post, setPost} = usePost()

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(json => {
        console.log(json)
        setPost(json)
      }) 
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {count}
        </p>
        <button
          className="btn btn-outline-light"
          onClick={()=> increment(3)}
        >
          Increment
        </button>
        <div className="container">
          <PostList post={post}/>
        </div>
      </header>
    </div>
  );
}

export default App;
