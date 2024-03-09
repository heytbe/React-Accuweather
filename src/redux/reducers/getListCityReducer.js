import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

export default function getListCityReducer(state = initialState.cityName, action) {
    switch (action.type) {
        case actionTypes.GET_LIST_CITY_NAME:
            return action.payload;
        default:
            return state;
    }
}