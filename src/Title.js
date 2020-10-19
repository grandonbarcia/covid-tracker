import React from 'react';
import './App.css';

const Title = ({ title }) => {

  return (
    <div className="row mb-3">
      <div className="col-12 col-md-12">
        <h5 className="panel-title-left">{title}</h5>
      </div>
    </div>

  )
}

export default Title;
