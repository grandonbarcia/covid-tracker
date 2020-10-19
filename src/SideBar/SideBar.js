import React, { useState, useEffect } from 'react';
import Posts from './Posts';
import Title from '../Title';




const SideBar = () => {

  const REDDIT_API = "https://www.reddit.com/r/coronavirus/hot.json?limit=6"

  let [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const response = await fetch(REDDIT_API);
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


  useEffect(() => {
    getPosts();
  }, []);




  return (
    <div className="h-75 col-12 offset-0 col-md-5 offset-md-0 col-lg-3 offset-lg-1 box">
      <Title title="Covid-19 News" />
      {listPosts}
      <div className="row mb-3">
        <div className="col-12 col-md-12">
          <h5 className="panel-title-right">GlobalSummary</h5>
        </div>
      </div>
    </div>

  )


}




export default SideBar;
