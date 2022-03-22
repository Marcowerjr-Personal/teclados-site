import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import React from "react";
import { useFetch } from "react-async";

function WeatherData() {
  const { data, error } = useFetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=28.654928&lon=-106.095055&appid=54368588f23be58231b998d39b509d05&lang=sp&units=metric`,
    {
      headers: { accept: "application/json" },
    }
  );

  if (error) return <div></div>
  if (data) return <div style={{color: 'white'}}>Clima en la ciudad de Chihuahua: {data.main.temp.toFixed()} °C</div>
  return <div></div>
}

export default WeatherData;