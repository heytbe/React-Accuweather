import React, { Component } from 'react'
import WeatherIcon from "../../assets/icon/cloudy-day-1.svg"
import { connect } from 'react-redux'
class Next extends Component {
    render() {
        let wind, unit, huminity, text,night;
        return (
            <div>
                {this.props.nextDay.map((city, index) => (
                    <div className="flex-row-between-start nextarea">
                        {city.DailyForecasts.map((forecast, i) => (
                            <div className="area2020 dayweather" key={i}>
                                <h4>{forecast.Date}</h4>
                                <WeatherIcon></WeatherIcon>
                                <h2 style={{ color: "rgba(30,144,255,1)" }}>En Yüksek</h2>
                                <h1>{forecast.Temperature.Maximum.Value} °C</h1>
                                <h2 style={{ color: "rgba(30,144,255,1)" }}>En Düşük</h2>
                                <h1>{forecast.Temperature.Minimum.Value} °C</h1>
                                {i === 1 && (
                                    <div className="fullscreen">
                                        <div style={{ display: 'none' }}>{wind = forecast.Day.Wind.Speed.Value}</div>
                                        <div style={{ display: 'none' }}>{unit = forecast.Day.Wind.Speed.Unit}</div>
                                        <div style={{ display: 'none' }}>{huminity = forecast.Day.RelativeHumidity.Average}</div>
                                        <div style={{ display: 'none' }}>{night = forecast.Night.LongPhrase}</div>
                                    </div>
                                )}
                            </div>
                        ))}
                        <div style={{ display: 'none' }}>{text = city.Headline.Text}</div>
                    </div>
                ))}
                <div className='flex-row-between-start nextarea'>
                    <div className="area2520 infobox">
                        <h6>Rüzgar</h6>
                        <div className="fullscreen box">
                            <div className="fullscreen boxinfo">
                                <h1>{wind}</h1>
                                <small>km/h</small>
                            </div>
                            <i class="fa-solid fa-wind"></i>
                        </div>
                    </div>
                    <div className="area2520 infobox">
                        <h6>Nem</h6>
                        <div className="fullscreen box">
                            <div className="fullscreen boxinfo">
                                <h1>{huminity}</h1>
                                <small>%</small>
                            </div>
                            <i class="fa-solid fa-droplet"></i>
                        </div>
                    </div>
                    <div className="area2520 infobox">
                        <h6>Hava Durumu</h6>
                        <div className="fullscreen box">
                            <div className="fullscreen boxinfo">
                                <h2>{text}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="area2520 infobox">
                        <h6>Gece</h6>
                        <div className="fullscreen box">
                            <div className="fullscreen boxinfo">
                                <h2>{night}</h2>
                            </div>
                            <i class="fa-regular fa-moon"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        nextDay: state.nextDayReducer
    }
}

export default connect(mapStateToProps)(Next);
