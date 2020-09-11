import React, {useContext} from 'react';
import Country from "./Country";
import Total from "./Total";
import {DataContext} from "../DataProvider"
import '../App.css';


const TotalRecovered = () => {

  const { value3, value4 } = useContext(DataContext);
  var [num] = value3;
  var [total] = value4;



  const listCountries = num.map((data, i) =>
    <div className = "col-md-12" key={i}>
      <Country  name={data.Country.split(" ", 2).join(" ")} num = {data.TotalRecovered}   />
    </div>
  );



  return(
    <div className = "col-8 offset-2 col-md-4 offset-md-0 ">
      <div className = "panel">
        <div className = "row justify-content-center">
          Total Recovered
          <div className = "col-md-12 title-name">

            <Total num = {total.TotalRecovered} />
          </div>

        </div>
        <div className = "row justify-content-center">
          {listCountries}
        </div>

      </div>
    </div>
  );

}

export default TotalRecovered;
