import React from 'react';
import Title from '../Title'
import TotalConfirm from './TotalConfirm';
import TotalRecover from './TotalRecover';
import TotalDeath   from './TotalDeath';


const GlobalSummary = (items) => {




  return (
      <div className = "row justify-content-center summary ">
        <div className = "col-md-12">
          <Title title="Global Summary"/>
          <div className="row">
            <div className = "col-md-12 offset-md-0">
              <div className = "row">
                <TotalConfirm />
                <TotalRecover />
                <TotalDeath />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}


export default GlobalSummary;
