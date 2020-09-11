import React from 'react';

const Posts = ({title, url, img}) => {

  const postStyle = {
    backgroundImage: `url(${img})`,

  }

  const imgStyle = {
    border: '2px solid white'
  }

  return (
    <div className = "row">
      <div className = "col-lg-10">
        <a href={url} target="_blank">
          <div className = "row posts ">
              <div className = "col-4 col-md-4">
                <img style={imgStyle} src={img} width = "100" height = "100"></img>
              </div>
              <div className = "col-8 col-md-8">
                {title}
              </div>
          </div>
        </a>
      </div>
    </div>

  )

}

export default Posts;
