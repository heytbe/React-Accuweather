import React, { Component } from 'react'
import { connect } from 'react-redux'
import WeatherSvg from '../../assets/icon/Snowy.svg'
class Weather extends Component {
  render() {
    return (
      <div className='todayarea'>
        {
        this.props.getOneCity.length > 0 && this.props.getOneCity.map((city, i) => (
            <section>
                <div className="flex-column-center-start today">
                    <section className='iconarea'>
                        <WeatherSvg className="icon" />
                    </section>
                    <h1>{city.Temperature.Metric.Value}</h1>
                </div>
                <div className="flex-row-between-start todayinfo">
                    <h2>{this.props.currentCity.LocalizedName ?? "Ardahan"}</h2>
                    <h5>{city.LocalObservationDateTime}</h5>
                </div>
                <div className='flex-column-center-start todaytext'>
                    <p className='flex-row-start-center'>
                        <i className="fa-solid fa-cloud"></i>
                        {city.WeatherText}
                    </p>
                </div>
            </section>
        ))
    }
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    currentCity : state.currentCityReducer,
    getOneCity : state.getWeatherReducer
  }
}

export default connect(mapStateToProps)(Weather);