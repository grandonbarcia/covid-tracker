import React from 'react';
import {getCurrentDate} from './getCurrentDate';


const TodaysDate = () => {

  return (

      <div className = "col-md-4 date">
        {getCurrentDate()}
      </div>

  );
}

export default TodaysDate;
