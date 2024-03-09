import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

export default function currentCityReducer(state = initialState.currentCity, action) {
    switch (action.type) {
        case actionTypes.CURRENT_CITY:
            return action.payload;
        default:
            return state;
    }
}