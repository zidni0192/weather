import axios from "axios";
export const getWeather = (prop) => {
  return {
    type: "GET_WEATHER",
    payload: axios.get(
      ` https://cors-anywhere.herokuapp.com/http://samples.openweathermap.org/data/2.5/forecast/daily?q=Jakarta&appid=KeyName%2080b953d69225206b9ee463f4fda03391%20Default%20daa8e43240fb0cf6f10e5189eaa66012`
    ),
    meta:{city:prop}
  };
};
export const setCity = (prop) => {
  return {
    type: "SET_CITY",
    meta: { city: prop },
  };
};
