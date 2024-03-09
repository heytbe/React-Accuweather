import * as actionTypes from "./actionTypes"

export function cityFiveDayWeather(cityarray){
    let dizi = [cityarray];
    return{
        type: actionTypes.CITY_5_DAY_WEATHER,
        payload:dizi
    }
}


export function cityFiveDayWeatherSuccess(city){
    return function(dispatch){
        return fetch("http://dataservice.accuweather.com/forecasts/v1/daily/5day/"+city+"?apikey=gx1ATLM06MkSBLifI2OYLz7CoKJfnI25&language=tr&details=true&metric=true")
        .then(response => response.json())
        .then(result => dispatch(cityFiveDayWeather(result)));
    }
}