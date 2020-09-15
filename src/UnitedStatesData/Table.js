import React, {useContext} from 'react';
import {DataContext} from "../DataProvider"



const Table = () => {

  const {value10} = useContext(DataContext);

  var [statesData] = value10;


  const listStates = statesData.map((data, i) =>
    <tr key = {i}>
      <th scope="row">{i + 1}</th>
      <td> {data.state} </td>
      <td> {data.positive} </td>
      <td> {data.recovered ? data.recovered : "-"} </td>
      <td> {data.death} </td>
      <td> {data.positiveIncrease} </td>
      <td> {data.deathIncrease} </td>
    </tr>
  );

  let topTenStates = listStates.slice(0,10);



  return (


    <div className = "row">
      <div className = "col-md-12 ">
        <div className = "table-responsive">
          <table className = "table text-right">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">State</th>
                <th scope="col">Confirmed</th>
                <th scope="col">Recovered</th>
                <th scope="col">Deaths</th>
                <th scope="col">New Confirmed</th>
                <th scope="col">New Deaths</th>
              </tr>
            </thead>
            <tbody>
              {listStates.slice(0,10)}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}


export default Table;
