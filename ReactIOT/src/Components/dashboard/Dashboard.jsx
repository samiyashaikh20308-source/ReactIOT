import React from 'react'
import { useState, useEffect } from 'react'
import {database} from '../../firebase'
import './dashboard.css'

import {ref, onValue} from 'firebase/database'

const Dashboard = () => {

    //const [state, setState] = useState(0)

    const [sensorData, setSensorData] = useState({
        Temperature : 28,
        Humidity : 65,
        Gas : 120,
    })

    useEffect(() => {
        const sensorRef = ref(database, "SensorData");

        onValue(sensorRef, (snapshot) => {
            const data = snapshot.val();

            if(data){
                setSensorData(data);
            }
        });
    },[]);


  return (
    <>
        {/*<h1>Sensor Data Fetching</h1>

        <div className="data">
            <h1>Temperature</h1>
            <p>{sensorData.Temperature}</p>
        </div>
        <div className="data">
            <h1>Humidity</h1>
            <p>{sensorData.Humidity}</p>
        </div>
        <div className="data">
            <h1>Gas</h1>
            <p>{sensorData.Gas}</p>
        </div>*/}
    <h1>Sensors Data Fetching</h1>

  <div className="cards-container">
    <div className="data">
      <h1>🌡 Temperature</h1>
      <p>{sensorData.Temperature} °C</p>
    </div>

    <div className="data">
      <h1>💧 Humidity</h1>
      <p>{sensorData.Humidity} %</p>
    </div>

    <div className="data">
      <h1>🔥 Gas</h1>
      <p>{sensorData.Gas} ppm</p>
    </div>
  </div>
    </>
  )
}

export default Dashboard
