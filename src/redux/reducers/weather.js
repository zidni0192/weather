const intialState = {
  weatherList: {},
  city: "Jakarta",
  isLoading: false,
  isRejected: false,
  isFulfilled: false,
};
const weather = (state = intialState, action) => {
  let newWeather;
  switch (action.type) {
    case "GET_WEATHER_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case "GET_WEATHER_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case "GET_WEATHER_FULFILLED":
      newWeather = {
        ...state.weatherList,
        [action.meta.city]: action.payload.data,
      };
      if (action.payload.data.error) {
        return {
          ...state,
          isLoading: false,
          isRejected: true,
        };
      } else {
        return {
          ...state,
          isLoading: false,
          isFulfilled: true,
          weatherList: newWeather,
        };
      }
    case "SET_CITY":
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        city: action.meta.city,
      };
    default:
      return state;
  }
};

export default weather;
