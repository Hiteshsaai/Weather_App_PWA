import axios from 'axios';


const URL = 'https://api.openweathermap.org/data/2.5/weather';


const API_KEY = 'Mention you API Key over here';


const fetchWeather = async(query) => {
    const {data} = await axios.get(URL, {
        params:{
            q: query, 
            units: 'metric',
            APPID: API_KEY
        }
    });

    return data;

};


export default fetchWeather;
