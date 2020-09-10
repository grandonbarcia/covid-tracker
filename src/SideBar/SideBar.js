import React, {useState, useEffect}  from 'react';
import Posts from './Posts';
import Title from '../Title';




const SideBar = () => {

  const REDDIT_API = "https://www.reddit.com/r/coronavirus/hot.json?limit=6"

  let [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const response = await fetch (REDDIT_API);
    const data = await response.json();
    setPosts(data.data.children.slice(2, 7));
  }

  let listPosts = posts.map((posts, i) =>

    <Posts key={i}
           title={posts.data.title}
           url={posts.data.url}
           img={posts.data.thumbnail}
    />

  );


  return (
    <div className = "col-md-3 offset-md-1">
      <Title title="Covid-19 News"/>
      {listPosts}
    </div>

  )


}




export default SideBar;
