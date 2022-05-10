import { Component } from 'react';
import WeatherService from './WeatherService';

class WeatherText extends Component {
   constructor (props) {
     super(props);
     this.updateChar();
   }

    state = {
       lat: null,
       lon: null,
       weather: null,
       country: null,
       name: null
    }

    weatherService = new WeatherService();

    updateChar = () => {
      this.weatherService
      .getAllCharacters()
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
        const {lat, lon, weather, country, name} = this.state;
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

