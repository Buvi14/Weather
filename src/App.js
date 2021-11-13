import LandingPage from "./LandingPage/LandingPage";
import weatherData from "./Context/Context";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  // State to store the data
  const [data, setdata] = useState("");
  const [weekdata, setWeekdata] = useState([]);
  const api_key = "31c6c3d7d0816a49083eeaced76118fa";
  const city = "bangalore";
  // make the api call
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`
      )
      .then((data) => {
        let lat = data.data.coord.lat;
        let lon = data.data.coord.lon;
        setdata(data.data);
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${api_key}`
          )
          .then((data) => {
            setWeekdata(data.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    // Store in context
    <weatherData.Provider value={{ data, weekdata }}>
      <LandingPage />
    </weatherData.Provider>
  );
}

export default App;
