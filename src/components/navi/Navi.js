import React, { Component } from 'react'
import logo from "../../assets/logo.jpg";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as naviActions from "../../redux/actions/naviActions"
import * as weatherActions from "../../redux/actions/weatherActions"
import * as nextActions from "../../redux/actions/nextActions"
class Navi extends Component {

  componentDidMount(){
    this.props.actions.getCity("ardahan");
    this.props.actions.weatherCity(316976);
    this.props.actions.nextDay(316976);
  }

  handleSearch = (e) => {
    document.querySelector(".searchbox").style.display = "block";
    this.props.actions.getCity(e.target.previousElementSibling.value);
  }

  selectCity = (cityId) => {
    this.props.actions.currentCity(cityId);
    this.props.actions.weatherCity(cityId.Key);
    this.props.actions.nextDay(cityId.Key);
    document.querySelector(".searchbox").style.display = "none";
  }

  render() {
    return (
      <div>
        <div className='flex-row-between-start headermenu'>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="searcharea">
            <div className='flex-row-between-start search'>
              <input type="text" className='searchInput' />
              <i className="fa-solid fa-magnifying-glass" onClick={this.handleSearch}></i>
            </div>
            <div className="searchbox">
              <ul className='cityList'>
                  {
                    this.props.cityList.map((city,i) =>(
                      <li onClick={() => this.selectCity(city)}>{city.LocalizedName}</li>
                    ))
                  }
              </ul>
            </div>
          </div>
          <ul className='menuarea'>
            <li>
              <a href="index.html">Ana Sayfa</a>
            </li>
            <li>
              <a href="index.html">Hakkımızda</a>
            </li>
            <li>
              <a href="index.html">Şehirler</a>
            </li>
            <li>
              <a href="index.html">Ayarlar</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cityList: state.getListCityReducer,
    currentCity: state.currentCityReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCity: bindActionCreators(naviActions.getCitySuccess, dispatch),
      currentCity : bindActionCreators(naviActions.currentCity,dispatch),
      weatherCity : bindActionCreators(weatherActions.getOneCity,dispatch),
      nextDay : bindActionCreators(nextActions.cityFiveDayWeatherSuccess,dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navi);