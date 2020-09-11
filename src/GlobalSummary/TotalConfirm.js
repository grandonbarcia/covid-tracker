import React, {useContext} from 'react';
import Country from "./Country";
import Total from "./Total";
import {DataContext} from "../DataProvider"
import '../App.css';


const TotalConfirm = () => {

  const { value, value4 } = useContext(DataContext);
  var [num] = value;
  var [total] = value4;


  const listCountries = num.map((data, i) =>
    <div className = "col-md-12" key={i}>
      <Country  name={data.Country.split(" ", 2).join(" ")} num = {data.TotalConfirmed}   />
    </div>
  );



  return(
    <div className = "col-8 offset-2 col-md-4 offset-md-0">
      <div className = "panel">
        <div className = "row justify-content-center">
          Total Confirmed:
          <div className = "col-md-12 title-name">

            <Total num = {total.TotalConfirmed} />
          </div>

        </div>
        <div className = "row justify-content-center">
          {listCountries}
        </div>

      </div>
    </div>

  );

}

export default TotalConfirm;
