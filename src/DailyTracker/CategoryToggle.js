import React from 'react';

const CategoryToggle = ({setCategoryType}) => {

  return (
    <div className = "col-10 offset-1 col-md-8 offset-md-0 col-lg-9 toggle ">

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
