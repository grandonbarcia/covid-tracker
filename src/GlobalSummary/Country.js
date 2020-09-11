import React from 'react';
import '../App.css';

const Country = ({name, num}) => {

  return (
    <div className = "row sub-title text-right">
      <div className = "col-6 col-md-6 text-left d-flex align-items-end">
        {name === "Russian Federation" ? "Russia" : name}
      </div>
      <div className = "col-6 col-md-6 text-right sub-num">
        <span className = "pull-right">
          {num}
        </span>
      </div>
    </div>
  );
}

export default Country
