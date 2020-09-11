import React from 'react';
import './App.css';

const Title = ({title}) => {

  return(
    <div className = "row title-row">
      <div className = "col-md-12 title-text">
        {title}
      </div>
    </div>

  )
}

export default Title;
