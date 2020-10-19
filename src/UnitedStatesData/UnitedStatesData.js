import React from 'react';
import Table from './Table';
import Title from '../Title'
import UpdatedLast from './UpdatedLast';


const UnitedStatesData = () => {
  return (

    <div className="row box">
      <div className="col-md-12">
        <Title title="State by State" />
        <Table />
        <div className="row mb-3">
          <div className="col-12 col-md-12">
            <h5 className="panel-title-right">GlobalSummary</h5>
          </div>
        </div>
      </div>

    </div>
  );
}

export default UnitedStatesData;
