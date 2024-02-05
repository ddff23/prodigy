const form = document.querySelector('form');
const locationInput = document.querySelector('#location');
const weatherInfo = document.querySelector('#weather-info');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = locationInput.value;
    getWeather(location);
});

function getWeather