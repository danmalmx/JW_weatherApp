class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feelsLike');
        this.wind = document.getElementById('w-wind');        
    }

    paint(weather) {
        console.log('weather', weather);
        this.location.textContent = `${weather.name}, ${weather.sys.country}`;
        this.desc.textContent = weather.weather[0].description;
        this.string.textContent = `${weather.main.temp}˚C`;
        this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`)
        this.humidity.textContent = `Relative humidity: ${weather.main.humidity}%`
        this.feelsLike.textContent = `Feels like: ${weather.main.feels_like}˚C`
        this.wind.textContent = `Wind: ${weather.wind.speed} km/h`
    }
}
