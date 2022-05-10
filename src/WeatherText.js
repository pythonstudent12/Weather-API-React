import { Component } from 'react';
import Spinner from './Spinner';
import WeatherService from './WeatherService';

class WeatherText extends Component {
   constructor (props) {
     super(props);
     this.updateInfo();
   }

    state = {
       lat: null,
       lon: null,
       weather: null,
       country: null,
       name: null,
       loading: true
    }

    weatherService = new WeatherService();

    updateInfo = () => {
      this.weatherService
      .getWeatherInfo()
      .then(res => {
        this.setState({
          lat: res.coord_x,
          lon: res.coord_y,
          weather: res.weather,
          country: res.country,
          name: res.name

        })
      })
    }
    

    render() {
        const {lat, lon, weather, country, name, loading} = this.state;

        if (loading) {
          return <Spinner/>
        }
        
        return (
            
                <div >
                    <div >
                        <p>Широта: {lat}</p>
                        <p>Долгота: {lon}</p>
                        <p>Страна: {country}</p>
                        <p>Место: {name}</p>
                        <p>Погода: {weather}</p>
                        
                    </div>
                </div>
           
            
        )
    }
}
export default WeatherText;

