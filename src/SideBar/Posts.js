import React from 'react';

const Posts = ({ title, url, img }) => {

  const postStyle = {
    backgroundImage: `url(${img})`,

  }

  const imgStyle = {
    border: '2px solid white'
  }

  return (
    <div className="row">
      <div className="col-12 col-lg-12">
        <a href={url} target="_blank">
          <div className="row posts ">
            <div className="col-4 col-md-5">
              <img style={imgStyle} src={img} width="100" height="100"></img>
            </div>
            <div className="h-50 col-8 col-md-7">
              <span className="post-title"></span>{title}
            </div>
          </div>
        </a>
      </div>
    </div>

  )

}

export default Posts;
