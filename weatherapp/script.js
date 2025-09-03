
const weatherTemp = document.getElementById('weather-temp');
const weatherFeels = document.getElementById('weather-feels');
const weatherDate = document.getElementById('weather-date');
const weatherTime = document.getElementById('weather-time');
const weatherHumidity = document.getElementById('weather-humidity');
const weatherPressure = document.getElementById('weather-pressure');
const weatherWind = document.getElementById('weather-wind');
const weatherDesc = document.getElementById('weather-desc');
const weatherDescMore = document.getElementById('weather-desc-more');
const weatherRefreshBtn = document.getElementById('weather-refresh');


weatherRefreshBtn.addEventListener('click', function () {
	refreshWeather()


})


function refreshWeather() {
	const now = new Date();
	const day = now.toLocaleString('en-US', { day: 'numeric' });
	const month = now.toLocaleString('en-US', { month: 'short' });
	const year = now.getFullYear();
	const weekday = now.toLocaleString('en-US', { weekday: 'short' });

	const formattedDate = `${month} ${day}, ${year} - ${weekday}`;
	console.log(formattedDate);
	weatherDate.textContent = formattedDate;


	const time = now.toLocaleTimeString('en-US', {
		hour: 'numeric',
		minute: '2-digit',
		hour12: true,
	});

	weatherTime.textContent = time

	const weather = fetch('https://api.openweathermap.org/data/2.5/weather?lat=48.45&lon=34.98&appid=547d80a5bb15b613a76eb678dcda34de')
		.then(res => res.json())
		.then(data => {
			console.log(data)
			const weatherTempSync = data.name + ' ' + (data.main.temp - 273.15).toFixed
				(1);
			weatherTemp.textContent = weatherTempSync + " " + "°C";
			const feelsC = (data.main.feels_like - 273.15).toFixed(1);
			weatherFeels.textContent = feelsC + "°C";
			const humidutyData = data.main.humidity
			weatherHumidity.textContent = humidutyData + "%"
			const PressureData = data.main.pressure
			weatherPressure.textContent = PressureData + ' ' + 'hPa'
			const windData = (data.wind.speed).toFixed(0)
			weatherWind.textContent = windData + ' ' + 'km/h SSE'
			const weatherDeskr = data.weather[0].main
			weatherDesc.textContent = weatherDeskr
			const weatherDeskrMoreData = data.weather[0].description
			weatherDescMore.textContent = weatherDeskrMoreData

			const iconCode = data.weather[0].icon;
			const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
			const weatherIcon = document.getElementById('weather-icon');
			weatherIcon.innerHTML = `<img src="${iconUrl}" alt="Weather icon">`;


		})

}

refreshWeather()