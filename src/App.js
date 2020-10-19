import React from 'react';
import './App.css';
import TitleBar from './TitleBar/TitleBar';
import NavBar from './NavBar/NavBar';
import GlobalSummary from './GlobalSummary/GlobalSummary';
import DailyTracker from './DailyTracker/DailyTracker';
import Table from './UnitedStatesData/Table';
import UnitedStatesData from './UnitedStatesData/UnitedStatesData';
import SideBar from './SideBar/SideBar';
import { DataProvider } from "./DataProvider";


const App = () => {

  return (
    <div className="App">
      <nav class="navbar navbar-light bg-light mb-5" style={{ opacity: .8 }}>
        <span class="navbar-brand mb-0 h1">Covid-19 Tracker</span>
      </nav>
      <div className="container-fluid h-100">
        <div className="row">
          <DataProvider>
            <GlobalSummary />
            <DailyTracker />
            <UnitedStatesData />
          </DataProvider>
          <SideBar />
        </div>
      </div>
    </div>
  );
}

export default App;
