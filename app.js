// ATTEMPT AT GETTING USERS LOCATIO 
// const ipAddress = async () =>{
//     const res = await fetch('https://api.ipregistry.co?key=xm7rvdhs5kpldc');
//     const data = await res.json();
    
//     console.log('City: ', data.location.city);
//     console.log('Country: ', data.location.country.name);
    
//     return data; 
// } 

// ipAddress();

// const city = () => {
//     const data = ipAddress();

//     return data.location.city
// }
// const country = () => {
//     const data = ipAddress();
//     console.log('countryCheck', data);

//     return data.location.country.name
// }
const storage = new Storage();
const weatherLocal = storage.getLocationData()
const weather = new Weather(weatherLocal.city, weatherLocal.country);
const ui = new UI;

document.addEventListener('DOMContentLoaded', getWeather);

document.getElementById('w-change-btn'),addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;
    
    weather.changeLocation(city, country);

    storage.setLocationData(city, country)
    
    getWeather();

    $('#w-change-btn').modal('hide');
    e.preventDefault();
})

function getWeather() {
    weather.getWeather()
        .then(result => {
            ui.paint(result);
        })
        .catch(err => console.log(err))
}
