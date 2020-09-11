import React, {useContext} from 'react';
import {DataContext} from "../DataProvider"
import {getCurrentDate} from './getCurrentDate';
import TodaysDate from './TodaysDate';
import CategoryToggle from './CategoryToggle';

const Daily = ({stats, today, yesterday, tenDaysAgo, aMonthAgo}) => {

  const {value6} = useContext(DataContext);
  const {value7} = useContext(DataContext);
  const {value8} = useContext(DataContext);
  const {value9} = useContext(DataContext);

  const [confirmToday] = value6;
  const [confirmTen] = value7;
  const [confirmThirty] = value8;
  const [confirmYesterday] = value9;



  return (
    <div className = "col-12 offset-0 col-md-12 offset-md-0">

      <div className = "row daily">
        <div className = "col-3 col-md-3">
            <div className = "row">
              <div className = "col-md-12 text-center sub-num">
                  {today}
              </div>
            </div>
            <div className = "row">
              <div className = "col-md-12 text-center sub-title">
                Today
              </div>
            </div>
        </div>
        <div className = "col-3 col-md-3">
          <div className = "row">
            <div className ="col-md-12 text-center sub-num">
              {yesterday}
            </div>
          </div>
          <div className = "row">
            <div className ="col-md-12 text-center sub-title">
              Yesterday
            </div>
          </div>
        </div>
        <div className = "col-3 col-md-3">
          <div className = "row">
            <div className ="col-md-12 text-center sub-num">
            {tenDaysAgo}
            </div>
          </div>
          <div className = "row">
            <div className ="col-md-12 text-center sub-title">
              10 Days Ago
            </div>
          </div>
        </div>
        <div className = "col-3 col-md-3">
          <div className = "row">
            <div className ="col-md-12 text-center sub-num">
              {aMonthAgo}
            </div>
          </div>
          <div className = "row">
            <div className ="col-md-12 text-center sub-title">
            30 Days ago
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Daily
