import { useEffect, useState } from 'react'
import './App.css'
import PostComponent from './Components/PostComponent';

function App() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [filterText, setFilterText] = useState("");

  const getPosts = async () => {
    let postsData = await fetch("https://jsonplaceholder.typicode.com/posts");
    postsData = await postsData.json();
    setPosts(postsData);
    setFilteredPosts(postsData);
  }

  const handleFilterPosts = () => {
    if (filterText) {
      let tempPosts = posts.filter(post => post.title.includes(filterText) ? true : false).map(post => post);
      tempPosts && setFilteredPosts(tempPosts);
    }
    else {
      setFilteredPosts(posts);
    }
  }

  useEffect(() => {
    getPosts();
  }, [])

  return (
    <div className="app">
      <div className='postFilter'>
        <input type="text" placeholder='Search posts with title' value={filterText} onChange={(e) => setFilterText(e.target.value)} />
        <button onClick={handleFilterPosts}>Submit</button>
      </div>
      <h3>Posts</h3>
      <div className='postContainer'>
        {filteredPosts?.length > 0 && filteredPosts?.map(post => {
          return <PostComponent key={post.id} post={post} />
        })}
      </div>
    </div>
  )
}

export default App
