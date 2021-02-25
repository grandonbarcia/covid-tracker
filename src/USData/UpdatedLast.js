import React, {useContext} from 'react';
import {DataContext} from "../DataProvider"



const UpdatedLast = () => {

  const {value10} = useContext(DataContext);
  var [statesData] = value10;


  return (
    <div className = "row">
      <div className = "col-md-6">
        Updated Last :
      </div>
    </div>
  );
}

export default UpdatedLast;
