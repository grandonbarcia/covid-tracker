import React, {useEffect, useState, createContext} from 'react';

import {getDateISO} from './Date';

export const DataContext = createContext();

export const DataProvider = (props) => {



  let SUMMARY_DATA = "https://api.covid19api.com/summary";
  let GRAPH_DATA = "https://api.covid19api.com/total/country/united-states";
  let STATES_DATA = "https://api.covidtracking.com/v1/states/current.json";


  let [total, setTotal] = useState({});
  let [confirmed, setConfirmed] = useState([]);
  let [deaths, setDeaths] = useState([]);
  let [recovered, setRecovered] = useState([]);
  let [cases, setCases] = useState({});


  let [confirmToday, setConfirmToday] = useState();
  let [confirmThirty, setConfirmThirty] = useState();
  let [confirmTen,  setConfirmTen] = useState();
  let [confirmYesterday, setConfirmYesterday] = useState();

  let [stats, setStats] = useState({});
  let [statesData, setStatesData] = useState([]);
  let [graphData, setGraphData] = useState({});

  useEffect(() => {
    getSummary()
      .then(handleResponse)
      .catch(error)

    getDataSet()
      .then(displayDailyStats)
      .then(graphDataSet)
      .catch(error)

    getStatesData()
      .then(handleStatesData)
      .catch(error);
      console.log("Use Effect!");
  }, [])

  const getSummary = async () => {
    const response = await fetch(SUMMARY_DATA);
    const data = await response.json();

    return data
  }

  const handleResponse = (data) => {
    console.log("Summary Succesfully Loaded!");
    let countries = data.Countries;
    let gLobal = data.Global;

    setConfirmed(getTop(countries, byConfirmed ));
    setDeaths(getTop(countries, byDeaths ));
    setRecovered(getTop(countries, byRecovered ));
    setTotal(gLobal);
  }

  const error = (error) => {
    console.log("Error! " + error);
  }

  const getTop = (countries, byCategory) => {
      return countries.sort(byCategory).slice(0,5);
  };

  const byConfirmed = (a, b) => {
    return b.TotalConfirmed - a.TotalConfirmed;
  }

  const byDeaths = (a, b) => {
      return b.TotalDeaths - a.TotalDeaths;
  }

  const byRecovered = (a, b) => {
    return b.TotalRecovered - a.TotalRecovered;
  }

  const getDataSet = async () => {
    const response = await fetch(GRAPH_DATA, {
      headers: {
        'X-Access-Token' : 'd908455c-8985-4153-9df2-1f9312db921c'
      }
    });
    const data = await response.json();
    return data;
  }

  const getStatesData = async () => {
    const response = await fetch(STATES_DATA);
    const data = response.json();

    return data;
  }

  const byPositive = (a, b) => {
    return b.positive - a.positive;
  }

  const handleStatesData = (data) => {
    setStatesData(data.sort(byPositive));
  }

  const getDataPoints = (element) => {


  }

  const graphDataSet = (data) => {
    let dataSet = data.slice(data.length - 31, data.length);
    let dates = [];
    let confirmed = [];
    let deaths = [];
    let recovered = [];

    for (let i = 1; i < dataSet.length; i++){
      dates.push(dataSet[i].Date.slice(5,10));
      confirmed.push(dataSet[i].Confirmed - dataSet[i-1].Confirmed)
      deaths.push(dataSet[i].Deaths - dataSet[i-1].Deaths)
      recovered.push(dataSet[i].Recovered - dataSet[i-1].Recovered);
    }

    setGraphData({confirmed, deaths, recovered, dates})


    return data
  }


  const displayDailyStats = (data) => {


    let confirmed = {};
    let deaths = {};
    let recovered = {};
    let stats = {}
    let ob = {}
    let today;
    let yesterday;
    let tenDaysAgo;
    let aMonthAgo;
    let lastIndex = data.length - 1;


    let category = ["Confirmed", "Deaths", "Recovered"]
    for ( let i = 0; i < category.length ; i++){

      today = data[data.length - 1][category[i]]- data[data.length - 2][category[i]];
      yesterday = data[data.length - 2][category[i]] - data[data.length - 3][category[i]]
      tenDaysAgo = data[data.length - 10][category[i]] - data[data.length - 11][category[i]]
      aMonthAgo = data[data.length - 30][category[i]] - data[data.length - 31][category[i]]


      stats[category[i]] = {today,
                    yesterday,
                    tenDaysAgo,
                  aMonthAgo}


    }
    console.log(stats);
    setStats(stats);
    return data;
  }



  return (
    <div className = "col-md-5 offset-md-2">
      <DataContext.Provider
        value={{ value: [confirmed, setConfirmed],
                 value1: [confirmed, setConfirmed],
                 value2: [deaths, setDeaths],
                 value3: [recovered, setRecovered],
                 value4: [total, setTotal],
                 value5: [graphData, setGraphData],
                 value6: [confirmToday, setConfirmToday],
                 value7: [confirmTen,  setConfirmTen],
                 value8: [confirmThirty, setConfirmThirty],
                 value9: [confirmYesterday, setConfirmYesterday],
                 value10: [statesData, setStatesData],
                 value11: [graphData, setGraphData],
                 value12: [stats, setStats]}}>
        {props.children}
      </DataContext.Provider>
    </div>
  );
}
