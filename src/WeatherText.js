import { Component } from 'react';
import Spinner from './Spinner';
import View from './View';
import WeatherService from './WeatherService';
import PropTypes from 'prop-types'


class WeatherText extends Component {
  
    state = {
      res: {},
      loading: true
    }

    weatherService = new WeatherService();

    componentDidMount () {
      //this.foo.bar=0;
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
    
    onUpdate = (e) => {
      const term = e.target.value;
      console.log(term);
    }

    render() {
        const {res, loading} = this.state;
          return (
                <div>
                  {loading ? <Spinner/> : <View props={res}/>}
                </div>
        )
    }
}

WeatherText.propTypes = {
  name: PropTypes.number,
  lon: PropTypes.number,
  lat: PropTypes.number
}


export default WeatherText;