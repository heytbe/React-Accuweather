import * as actionTypes from "./actionTypes"

export function getList(cityname){
    return {
        type: actionTypes.GET_LIST_CITY_NAME,
        payload : cityname
    }
}

export function currentCity(cityId){
    return{
        type : actionTypes.CURRENT_CITY,
        payload : cityId
    }
}

export function getCitySuccess(city){
    return function(dispatch){
        return fetch("http://dataservice.accuweather.com/locations/v1/cities/search?apikey=gx1ATLM06MkSBLifI2OYLz7CoKJfnI25&q="+city+"&language=TR&details=true&offset=20",{
            method:"GET"
        })
        .then(response => response.json())
        .then(result => dispatch(getList(result)));
    }
}