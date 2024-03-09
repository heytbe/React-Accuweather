import { combineReducers } from "redux";
import currentCityReducer from "./currentCityReducer"
import getListCityReducer from "./getListCityReducer"
import getWeatherReducer from "./getWeatherReducer"
import nextDayReducer from "./nextDayReducer"
const rootReducer = combineReducers({
    currentCityReducer,
    getListCityReducer,
    getWeatherReducer,
    nextDayReducer
});

export default rootReducer;