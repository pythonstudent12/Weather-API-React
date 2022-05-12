import { Component } from 'react';
import Spinner from './Spinner';
import WeatherService from './WeatherService';

class WeatherText extends Component {
  
    state = {
      res: {},
      loading: true
    }

    weatherService = new WeatherService();

    componentDidMount () {
      this.updateInfo();
    }

    onInfoLoaded = (res) => {
      this.setState({
      res,
      loading: false
      })
    }

    updateInfo = () => {
      this.weatherService
      .getWeatherInfo()
      .then(this.onInfoLoaded)
    }
    

    render() {
        const {res, loading} = this.state;
          return (
                <div>
                  {loading ? <Spinner/> : <View res={res}/>}
                </div>
        )
    }
}

const View = ({res}) => {
  const {lon, lat, weather, country, name} = res;
  return (
    <div >
      <p>Широта: {lon}</p>
      <p>Долгота: {lat}</p>
      <p>Страна: {country}</p>
      <p>Место: {name}</p>
      <p>Погода: {weather}</p>
    </div>
  )
}

export default WeatherText;