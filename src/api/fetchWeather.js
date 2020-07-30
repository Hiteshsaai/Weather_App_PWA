import axios from 'axios';


const URL = 'https://api.openweathermap.org/data/2.5/weather';


const API_KEY = '733e204eebfb70f781c5403c72fb725b';


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
