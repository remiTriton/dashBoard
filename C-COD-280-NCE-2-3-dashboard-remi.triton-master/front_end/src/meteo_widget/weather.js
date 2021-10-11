import React, { useState, useEffect } from "react";
import DisplayWeather from "./DisplayWeather";
import "./weather.css";


function Weather() {



  const drag = (e) => {
    e.dataTransfer.setData('transfer', e.target.id);
}

 const noAllowDrop = (e) =>{
    e.stopPropagation();
}

  const [seconds, setSeconds] = useState(0);
  const [weather, setWeather] = useState([]);
  const [form, setForm] = useState({
    city: "",
    country: "",
  });
  

  const APIKEY = "0220fa9fa5f81a4f1a045cb7f62cb460";
  async function weatherData(e) {
    e.preventDefault();
    if (form.city == "") {
      alert("Add values");
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${APIKEY}`
      )
        .then((res) => res.json())
        .then((data) => data);
        
        

      setWeather({ data: data });
    }
    
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  
  
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name == "city") {
      setForm({ ...form, city: value });
    }
    if (name == "country") {
      setForm({ ...form, country: value });
    }
  };
  return (
    <div className="weather" id='weather' onDragStart={drag} onDragOver={noAllowDrop} >
      <span className="title">Weather App</span>
      <br />
      <form>
        <input
          type="text"
          placeholder="city"
          name="city"
          onChange={(e) => handleChange(e)}
        />
        &nbsp; &nbsp; &nbsp;&nbsp;
        <input
          type="text"
          placeholder="Country"
          name="country"
          onChange={(e) => handleChange(e)}
        />
        <button className="getweather" onClick={(e) => weatherData(e)}>
          Submit
        </button>
      </form>

      {/* {console.log(weather)} */}
      {weather.data != undefined ? (
        <div>
          <DisplayWeather data={weather.data} />
        </div>
      ) : null}
    </div>
  );
}

export default Weather;