import React from 'react';
import './App.css';

const Title = ({title}) => {

  return(
    <div className = "row main-title-row">
      <div className = "col-md-12 main-title">
        {title}
      </div>
    </div>

  )
}

export default Title;
