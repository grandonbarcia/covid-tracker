import React from 'react';

const CategoryToggle = ({setCategoryType}) => {

  return (
    <div className = "col-md-5 offset-md-3 text-right">

      <div className="btn-group btn-group-toggle" data-toggle="buttons">
        <label  className="btn btn-secondary active" onClick={() => setCategoryType("Confirmed")}>
          <input type="radio" /> Confirmed
        </label>
        <label className="btn btn-secondary" onClick={() => setCategoryType("Deaths")}>
          <input type="radio"/> Deaths
        </label>
        <label className="btn btn-secondary" onClick={() => setCategoryType("Recovered")}>
          <input type="radio"/> Recovered
        </label>
      </div>


    </div>


  )

}

export default CategoryToggle;
