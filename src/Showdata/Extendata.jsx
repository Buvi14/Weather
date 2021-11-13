import React, { useContext } from 'react'
import weatherData from '../Context/Context';
import './Extendata.css'

export default function Extendata() {
    const { data } = useContext(weatherData);
    console.log(data)
    return (
        <div>
            {data ? <div className="extend-data" data-aos="fade-up">
                <div className="wind-speed">Wind Speed: <span>{data.wind.speed}</span></div>
                <div className="humidity">Humidity: <span>{data.main.humidity}</span></div>
                <div className="pressure">Pressure: <span>{data.main.pressure}</span></div>
                <div className="sun-rise">Sun Rise: <span>{new Date(data.sys.sunrise).toLocaleTimeString()}</span></div>
                <div className="sun-set">Sun Set: <span>{new Date(data.sys.sunset).toLocaleTimeString()}</span></div>
            </div> : ""}
        </div>
    )
}
