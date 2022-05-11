import { Component } from 'react';
import Spinner from './Spinner';
import WeatherService from './WeatherService';

class WeatherText extends Component {
   constructor (props) {
     super(props);
     this.updateInfo();
   }

    state = {
      res: {},
      loading: true
    }

    weatherService = new WeatherService();


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
  const {lat, lon, weather, country, name} = res;
  return (
    <div >
      <p>Широта: {lat}</p>
      <p>Долгота: {lon}</p>
      <p>Страна: {country}</p>
      <p>Место: {name}</p>
      <p>Погода: {weather}</p>
    </div>
  )
}






export default WeatherText;

