import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"


export default function nextReducer(state = initialState.fiveday, action) {
    switch (action.type) {
        case actionTypes.CITY_5_DAY_WEATHER:
            return action.payload;
        default:
            return state;
    }
}