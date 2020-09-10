import React from 'react';
import '../App.css';

const Total = ({num}) => {

  return (

      <div className = "row justify-content-center title-num">
        <div className = "col-md-12 text-center">
          {num}
        </div>
      </div>

  );
}

export default Total
