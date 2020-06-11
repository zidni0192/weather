import React from "react";
import jseon from "../assets/json/city.json";
import { setCity, getWeather } from "../redux/actions/weather";

function Header(props) {
  const city = props.weather.city;
  const _handleClick = (paramcity) => {
    props.dispatch(setCity(paramcity));
    if (!props.weather.weatherList[paramcity]&&props.menu!==1) {
      props.dispatch(getWeather(paramcity));
    }
  };
  return (
    <div className="header">
      <div className="brand">Weather</div>
      <div className="dropdown">
        {city}
        <div className="dropdown-menu">
          {jseon.map((theCity, idx) => (
            <div
              className={`menu-item ${city === theCity ? "active" : ""}`}
              key={idx}
              onClick={() => _handleClick(theCity)}
            >
              {theCity}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
