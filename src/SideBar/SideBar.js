import React, { useState, useEffect } from 'react';
import Posts from './Posts';
import Title from '../Title';
import Virus from '../img/virus.png'



const SideBar = () => {

  const REDDIT_API = "https://www.reddit.com/r/coronavirus/hot.json?limit=6"

  let [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const response = await fetch(REDDIT_API);
    const data = await response.json();
    setPosts(data.data.children.slice(2, 7));
  }

  console.log(posts);

  let listPosts = posts.map((posts, i) =>

    <Posts key={i}
      title={posts.data.title}
      url={posts.data.url}
      img={posts.data.thumbnail === 'default' ? Virus : posts.data.thumbnail}
    />

  );


  useEffect(() => {
    getPosts();
  }, []);




  return (
    <div className="h-75 col-12 offset-0 col-md-10 offset-md-1 col-lg-10 offset-lg-1 col-xl-3 offset-xl-1 box">
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
