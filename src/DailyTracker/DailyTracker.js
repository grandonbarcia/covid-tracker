import React, { useState, useEffect, useContext } from 'react';
import Title from '../Title';
import TodaysDate from './TodaysDate';
import CategoryToggle from './CategoryToggle';
import BarChart from './BarChart';
import Daily from './Daily';
import { DataContext } from "../DataProvider"






const DailyTracker = () => {

  let { value12 } = useContext(DataContext);
  let [stats] = value12;
  let [categoryType, setCategoryType] = useState("Confirmed");
  let [today, setToday] = useState("-");
  let [yesterday, setYesterday] = useState("-")
  let [tenDaysAgo, setTenDaysAgo] = useState("-")
  let [aMonthAgo, setAMonthAgo] = useState("-")



  let isEmpty = (obj) => {

    for (var key in obj) {
      if (obj.hasOwnProperty(key))
        return false;
    }

    return true;
  }


  let displayStats = () => {

    setToday(stats[categoryType].today);
    setYesterday(stats[categoryType].yesterday);
    setTenDaysAgo(stats[categoryType].tenDaysAgo);
    setAMonthAgo(stats[categoryType].aMonthAgo);


  }


  useEffect(() => {
    isEmpty(stats) ? console.log("Daily Stats is Empty") : displayStats(categoryType);
  }, [categoryType, stats]);




  return (


    <div className="row box details mt-10">
      <div className="col-md-12">
        <Title title="Daily Tracker" />
        <div className="row date-row ">
          <TodaysDate />
          <CategoryToggle setCategoryType={setCategoryType} />
        </div>
        <div className="row">
          <Daily today={today} yesterday={yesterday} tenDaysAgo={tenDaysAgo} aMonthAgo={aMonthAgo} />
        </div>
        <div className="row with-margin">
          <BarChart categoryType={categoryType} />
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


export default DailyTracker;
