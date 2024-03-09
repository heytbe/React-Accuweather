import * as actionTypes from "./actionTypes"

export function getWeather(city){
    return{
        type : actionTypes.CITY_WEATHER,
        payload: city
    }
}

export function getOneCity(cityKey) {
    return function (dispatch) {
        return fetch("http://dataservice.accuweather.com/currentconditions/v1/" + cityKey + "?apikey=gx1ATLM06MkSBLifI2OYLz7CoKJfnI25&language=tr")
            .then(response => response.json())
            .then(result => dispatch(getWeather(result)));
    }
}