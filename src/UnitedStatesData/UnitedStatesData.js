import React from 'react';
import Table from './Table';
import Title from '../Title'
import UpdatedLast from './UpdatedLast';


const UnitedStatesData = () => {
  return (
    <div className = "row">
      <div className = "col-md-12">
        <Title title="State by State"/>
        <Table />
      </div>
    </div>
  );
}

export default UnitedStatesData;
