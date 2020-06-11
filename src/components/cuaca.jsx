import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getWeather } from "../redux/actions/weather";
const convertDate = (date) => {
  var d = new Date(0);
  d.setUTCSeconds(date);
  let newDate = new Date(d);
  let day = newDate.getDate();
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[newDate.getMonth()];
  var year = newDate.getFullYear();
  return `${day} / ${month} / ${year}`;
};
function Cuaca(props) {
  return (
    <div className="item-cuaca">
      <div className="item-text">{convertDate(props.dt)}</div>
      <div className="item-icon">
        <img
          src={`http://openweathermap.org/img/wn/${props.weather[0].icon}@2x.png`}
          alt={props.cod}
        />
      </div>
      <div className="item-text">{props.weather[0].main}</div>
      <div className="item-content">
        <div className="temperature">
          {Object.keys(props.temp).map((item, key) => (
            <div key={key}>
              {`${item} : ${String(props.temp[item] - 273.15).slice(0, 4)}`}
              &#8451;
            </div>
          ))}
          <div>Pressure : {props.pressure}</div>
          <div>Humidity : {props.humidity}</div>
        </div>
      </div>
    </div>
  );
}
const MappingData = (props) => {
  useEffect(() => {
    if (!props.weather.weatherList[props.weather.city]) {
      props.dispatch(getWeather(props.weather.city));
    }
    // eslint-disable-next-line 
  }, []);

  return props.weather.isLoading ? (
    <div className="under-construction">Loading</div>
  ) : !props.weather.isRejected ? (
    props.weather.weatherList[props.weather.city] ? (
      <div className="item-cuaca-container">
        {props.weather.weatherList[props.weather.city] ? (
          props.weather.weatherList[
            props.weather.city
          ].list.map((item, key) => <Cuaca {...item} key={key} />)
        ) : (
          <div></div>
        )}
      </div>
    ) : (
      <div className="under-construction">Sorry, Something went wrong</div>
    )
  ) : (
    <div className="under-construction">Sorry, Something went wrong</div>
  );
};
const mapStateToProps = (state) => ({
  weather: state.Weather,
});
export default connect(mapStateToProps)(MappingData);
