import React, { useState, useEffect, useContext } from 'react';
import Table from './Table';
import Title from '../Title'
import UpdatedLast from './UpdatedLast';
import MapChart from './MapChart/MapChart';
import { DataContext } from "../DataProvider"


const USData = () => {


  const { value10 } = useContext(DataContext);
  const [graphData] = value10;

  const [position, setPosition] = useState([]);
  const [state, setState] = useState({})
  const [stateName, setStateName] = useState('');
  const [stateData, setStateData] = useState({ newConfirmed: 0, newDeath: 0 });
  const [showBox, setShowBox] = useState('hidden');

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const style = {
    position: 'absolute',
    width: '150px',
    height: '70px',
    fontSize: '12px',
    padding: '5px',
    visibility: showBox,
    backgroundColor: '#282c34',
    border: '2px white solid',
    left: position[0] - 70 + 'px',
    top: position[1] - 70 + 'px'
  }

  const updateWindowSize = () => {

    setWidth(window.innerWidth);
    setHeight(window.innerHeight);

  }



  useEffect(() => {
    let data = graphData.find((s) => s.state === state.initials) || {};
    setStateData({ newConfirmed: data.positiveIncrease, newDeath: data.deathIncrease } || {})
  }, [state.name]);

  useEffect(() => {

    window.addEventListener("resize", updateWindowSize)
    return () => window.removeEventListener("resize", updateWindowSize);
  }, [])

  return (
    <div className="row box">
      <div className="col-md-12">
        <Title title="State by State" /> {width < 992 ? <></> : <h5>Hover w/ Cursor</h5>}
        <div style={{ height: 'auto', width: 'auto' }}>
          <div style={style}>
            <div>
              {state.name}
            </div>
            <div>
              New Confirmed: {stateData.newConfirmed}
            </div>
            <div>
              New Death: {stateData.newDeath}
            </div>
          </div>
          {width < 992 ? <Table /> : <MapChart setState={setState} setPosition={setPosition} setStateName={setStateName} setShowBox={setShowBox} />}
        </div>
        <div className="row mb-3">
          <div className="col-12 col-md-12">
            <h5 className="panel-title-right">GlobalSummary</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default USData;
