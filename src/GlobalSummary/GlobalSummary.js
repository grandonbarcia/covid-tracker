import React from 'react';
import Title from '../Title'
import TotalConfirm from './TotalConfirm';
import TotalRecover from './TotalRecover';
import TotalDeath from './TotalDeath';


const GlobalSummary = (items) => {




  return (

    <div className="row box summary ">
      <div className="col-md-12">
        <Title title="Global Summary" />
        <div className="row">
          <div className="col-md-12 offset-md-0">
            <div className="row">
              <TotalConfirm />
              <TotalRecover />
              <TotalDeath />
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12 col-md-12">
            <h5 className="panel-title-right">GlobalSummary</h5>
          </div>
        </div>
      </div>
    </div>

  )
}


export default GlobalSummary;
