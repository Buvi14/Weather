import React, { useContext } from 'react';
import './Showdata.css'
import weatherData from '../Context/Context';

export default function Showdata() {
    // Make the use of context
    const { data } = useContext(weatherData);
    return (
        <div className='show-container'>
            {data === "" ? '' : <> <div className="data-container" data-aos="fade-up">
                <div className="city">
                    {data.name} <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt='icon' />
                </div>
                <div className="weather">Weather <span>{data.weather[0].main}</span>
                </div>
                <div className="current-temp">Temparature<span>{data.main.temp}&deg;C</span>
                </div>
                <div className="temp">Maximum Temparature<span>{data.main.temp_max}&deg;C</span>
                </div>
                <div className="temp temp-min">Minimum Temparature<span>{data.main.temp_min}&deg;C</span>
                </div>
            </div>

            </>
            }

        </div >
    )
}
