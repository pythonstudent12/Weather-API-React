class WeatherService {
    
    _apiKey = 'f3b5103f13f60b1d60e616a12b145d56';

    getResource = async (url) => {
        let res = await fetch(url);
        if (!res.ok) {
            console.log('000');
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    }

    getWeatherInfo = async () => {
        let lat = Math.floor(Math.random() * (80 - 20) + 20);
        let lon = Math.floor(Math.random() * (80 - 20) + 20);
        const res = await this.getResource(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this._apiKey}`);
        return this._transformInfo(res);
    }

    _transformInfo = (res) => {
        return {
            lon: res.coord.lon,
            lat: res.coord.lat,
            weather: res.weather[0].description,
            country: res.sys.country,
            name: res.name
        }
    }
  
}

export default WeatherService;