const openweather = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
});

const successCallback = (position) => {
  const lon = position.coords.longitude;
  const lat = position.coords.latitude;

  openweather
    .get('/weather', {
      params: {
        appid: '7c1213045c070dcdfe54766fce8007b3',
        lat,
        lon,
        units: 'metric',
      },
    })
    .then((res) => {
      document.querySelector('.weather').innerHTML = `
        <div class="temperature">
          <div class="temperature-amount">${res.data.main.temp}</div>
          °C
        </div>
        <div class="status">${(innerHTML = res.data.weather[0].main)}</div>
      `;
    })
    .catch((error) => {
      document.querySelector('.weather').innerHTML = 'error';
    });
};

const errorCallback = () => {
  document.querySelector('.weather').innerHTML =
    'allow location to view weather data';
};

navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
