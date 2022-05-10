class WeatherService {
    
    _apiKey = '06fedfea606ed7b940e224fe7059c6a6';

    getResource = async (url) => {
        let res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    }

    getAllCharacters = async () => {
        let lat = Math.floor(Math.random() * (80 - 20) + 20);
        let lon = Math.floor(Math.random() * (80 - 20) + 20);
        const res = await this.getResource(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this._apiKey}`);
        return this._transformCharacter(res);
    }

    _transformCharacter = (res) => {
        return {
            coord_x: res.coord.lon,
            coord_y: res.coord.lat,
            weather: res.weather[0].description,
            country: res.sys.country,
            name: res.name
        }
    }
  
}

export default WeatherService;