import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

export default function getWeatherReducer(state = initialState.weather, action) {
    switch (action.type) {
        case actionTypes.CITY_WEATHER:
            return action.payload;
        default:
            return state;
    }
}