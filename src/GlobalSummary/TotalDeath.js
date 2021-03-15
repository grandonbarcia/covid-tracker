
import React, { useContext } from 'react';
import Country from "./Country";
import Total from "./Total";
import { DataContext } from "../DataProvider"
import '../App.css';


const TotalDeath = () => {

  const { value2, value4 } = useContext(DataContext);
  var [num] = value2;
  var [total] = value4;



  const listCountries = num.map((data, i) =>
    <div className="col-md-12" key={i}>
      <Country name={data.Country.split(" ", 2).join(" ")} num={data.TotalDeaths} />
    </div>
  );



  return (
    <div className="col-10 offset-1 col-md-4 offset-md-0 ">

      <div className="row justify-content-center">
        Total Deaths:
        <div className="col-md-12 title-name">
          <Total num={total.TotalDeaths} />
        </div>
      </div>
      <div className="row justify-content-center">
        {listCountries}
      </div>

    </div>

  );

}

export default TotalDeath;
