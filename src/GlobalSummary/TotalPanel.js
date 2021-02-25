import React, { useEffect, useContext } from 'react';
import Country from "./Country";
import Total from "./Total";
import { DataContext } from "../DataProvider"
import '../App.css';


const TotalPanel = ({ category, total, countries }) => {

  const { value, value4 } = useContext(DataContext);

  var [num] = value;




  const listCountries = countries.map((data, i) =>

    <div className="col-md-12" key={i}>
      <Country name={data.Country} num={data.total} />
    </div>
  );

  useEffect(() => {
    console.log(category);
    console.log(total);
    console.log(countries);
  }, [])



  return (
    <div className="col-md-4">
      <div className="row justify-content-center">
        Total {category}:
        <div className="col-md-12 title-name">
          <Total total={total} />
        </div>
      </div>
      <div className="row justify-content-center">
        {listCountries}
      </div>
    </div>

  );

}

export default TotalPanel;
