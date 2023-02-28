import './App.css';
import Forecast from './components/Forecast';
import Inputs from './components/Inputs';
import TempartureAndDetails from './components/TempartureAndDetails';
import TimeAndLocation from './components/TimeAndLocation';
import TopButtons from './components/TopButtons';
import getFormattedWeatherData from './services/weatherService';
import { useEffect, useState } from 'react';

function App() {

  const [query, setQuery] = useState({q: 'Berlin'}) 
  const [units, setUnits] = useState('metric') 
  const [weather, setWeather] = useState(null) 

  useEffect(() => {
    const fetchWeather = async() => {
      const data =  await getFormattedWeatherData({...query, units}).then((data) => {
        setWeather(data)
      })
    }
  
    fetchWeather()
  },[query, units])

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl
    shadow-gray-400">
      <Inputs setQuery={setQuery} units setUnits />

      {weather && (
      <div>
        <TimeAndLocation weather={weather} />
        <TempartureAndDetails weather={weather} />

        <Forecast title='Hourly Forecast' items={weather.hourly}/>
        <Forecast title='Daily Forecast' items={weather.daily}/>
      </div>
      )}

    </div>
  );
}

export default App;
