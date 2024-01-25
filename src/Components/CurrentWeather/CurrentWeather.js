import React from "react";
import "./CurrentWeather.css";

export default function CurrentWeather({ data }) {
  return (
    <>
      <div className="weather">
        <div className="top">
          <div>
            <p className="city">{data.city}</p>
            <p className="weather_desc">{data.weather[0].description}</p>
          </div>
          <img
            alt="weather"
            className="weather-icon"
            src={`WeatherApp/icons/${data.weather[0].icon}.png`}
          />
        </div>
        <div className="bottom">
          <p className="temp">{Math.round(data.main.temp)}°C</p>
          <div className="details">
            <div className="parameter_row">
              <span className="parameter_label">Details</span>
            </div>
            <div className="parameter_row">
              <span className="parameter_label">Feels Like</span>
              <span className="parameter_value">
                {Math.round(data.main.feels_like)}°C
              </span>
            </div>
            <div className="parameter_row">
              <span className="parameter_label">Wind</span>
              <span className="parameter_value">
                {Math.round(data.wind.speed)}km/h
              </span>
            </div>
            <div className="parameter_row">
              <span className="parameter_label">Humidity</span>
              <span className="parameter_value">
                {Math.round(data.main.humidity)}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
