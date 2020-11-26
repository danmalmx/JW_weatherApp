class Weather {
    constructor(city, country) {
        this.apiKey = 'a48e0c0769fd8fb4a3cd3d8d11a02b34';
        this.city = city;        
        this.country = country;        
    }

    async getWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}`);
        
        const responseData = await response.json();
        
        return responseData;
    }

    async changeLocation(city, country) {
        this.city = city;
        this.country = country;

    }
}

