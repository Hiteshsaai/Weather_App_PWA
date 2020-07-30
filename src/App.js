import React from 'react';

import fetchWeather from './api/fetchWeather';

import classes from './App.module.css'

const App = () => {
    return (
        <div className = {classes.main-container}>
            <input
                type = 'text'
                className = {classes.search}
                placeholder = 'Search'
                value = {}
                onChange ={}

            />
        </div>
    )
};


export default App;




