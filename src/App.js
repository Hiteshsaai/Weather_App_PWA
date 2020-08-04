import React, {useState} from 'react';

import fetchWeather from './api/fetchWeather';

import './App.css';

const App = () => {

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    
    const search = async(e) => {
        if (e.key === 'Enter'){
            const data = await fetchWeather(query);
            setWeather(data);
            setQuery('');
        }

    }

    let styles  = {
        background: 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.418) ), url(https://www.bluefinllc.com/wp-content/uploads/2019/08/AdobeStock_120884346_sm-e1566503899644.jpg )',
        /* background-image: url('https://www.bluefinllc.com/wp-content/uploads/2019/08/AdobeStock_120884346_sm-e1566503899644.jpg    '); */
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }



    return (
        <div className = 'main-container' style = {styles}>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;1,300&display=swap" rel="stylesheet"></link>
            <h1 class = "heading"> Weather App </h1>
            <input
                type = 'search'
                className = 'search'
                placeholder = 'Search'
                value = {query}
                onChange ={(e) => setQuery(e.target.value)}
                onKeyPress = {search}
            />
            {weather.main && (
                <div className = 'city'>
                    <h1 className = 'city-name'>
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h1>
                    <div className = 'city-temp'> 
                         {Math.round(weather.main.temp)}
                         <sup>  &deg;C  </sup>   
                    </div>
                    <div className = 'info'>
                        <img className= 'city-icon' src = {`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description}></img>
                        <p> {weather.weather[0].description}</p>
                        {console.log(weather.weather[0].description.includes('clear'))}
                    </div>
                    <div className = 'city-temp-max-min'>
                        Max Temperature:{Math.round(weather.main.temp_max)}
                        <sup> &deg;C </sup>
                        &nbsp;
                        Min Temperature:{Math.round(weather.main.temp_min)}
                        <sup> &deg;C </sup>
                    </div>
 
                </div>
            )}

        </div>
    )
};


export default App;




