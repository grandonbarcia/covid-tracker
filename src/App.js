import React from 'react';
import './App.css';
import TitleBar from './TitleBar/TitleBar';
import NavBar from './NavBar/NavBar';
import GlobalSummary from './GlobalSummary/GlobalSummary';
import DailyTracker from './DailyTracker/DailyTracker';
import Table from './USData/Table';
import USData from './USData/USData';
import SideBar from './SideBar/SideBar';
import { DataProvider } from "./DataProvider";


const App = () => {

  return (
    <div className="App">
      <nav className="navbar fixed-top navbar-light bg-light mb-5" style={{ backgroundColor: '#CED0D2' }}>
        <span className="navbar-brand mb-0 h1">Covid-19 Tracker</span>
      </nav>
      <div className="container-fluid h-100 pt-5" >
        <div className="row" >
          <DataProvider>
            <GlobalSummary />
            <DailyTracker />
            <USData />
          </DataProvider>
          <SideBar />
        </div>
      </div>
    </div>
  );
}

export default App;
