function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
  }


    /*######## Footer Date #####*/
try {
    const options = {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    };
    document.getElementById('currentDate').textContent = new Date().toLocaleDateString('en-US', options);
  } catch (e) {
    alert('Error with code or your browser does not support Locale');
  }


const apiURL = 'https://api.openweathermap.org/data/2.5/weather?lat=42.0380399&lon=-111.4048681&appid=e592e2e06eeae47ff9c02cce63ec9adc&units=imperial';
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.table(jsObject);
        let t = parseFloat(jsObject.main.temp);
        let s = parseFloat(jsObject.wind.speed);
        let chill = "N/A";
        document.getElementById('temp').innerHTML = jsObject.weather[0].description;
        document.getElementById('feels').innerHTML = Math.round(t) + "&#8457;";
        document.getElementById("chill").innerHTML = chill + " ";
        document.getElementById('humidity').innerHTML = jsObject.main.humidity + "&#37;";
        document.getElementById('speed').innerHTML = Math.round(s) + " mph";

        //calculate windchill
        if (temp <= 50 && speed >= 3) {
            let f = (35.74 + (0.6215 * t)) - (35.75 * (Math.pow(speed, 0.16))) + (0.4275 * (t * (Math.pow(speed, 0.16))));
            chill = Math.round(f);
        } else {
            chill = "N/A";
        }
    });
const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=42.0380399&lon=-111.4048681&units=imperial&appid=e592e2e06eeae47ff9c02cce63ec9adc';
fetch(forecastURL)
    .then((response) => response.json())
    .then((forecastObject) => {

        console.table(forecastObject);
        var forecast = forecastObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        console.table(forecast);

        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        for (let day = 0; day < forecast.length; day++) {

            const d = new Date(forecast[day].dt_txt);
            const imgSrc = 'https://openweathermap.org/img/w/' + forecast[day].weather[0].icon + '.png';
            const desc = forecast[day].weather[0].description;


            document.getElementById(`dayofweek${day+1}`).textContent = weekdays[d.getDay()];
            document.getElementById(`forecast${day+1}`).textContent = Math.round(forecast[day].main.temp);
            document.getElementById(`icon${day+1}`).setAttribute('src', imgSrc);
            document.getElementById(`icon${day+1}`).setAttribute('alt', desc);
        }
    });


//Events

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

function events(city) {

    fetch(requestURL)
        .then(function (response) {
            return response.json();
        }).then(function (jsonObject) {
            const town = jsonObject['towns'];
            const filtered = town.filter(town => (town.name == city));
            let paragraph = document.createElement('div');

            for (let i = 0; i < filtered[0].events.length; i++) {
                let eventCity = document.getElementsByClassName("city");
                let eventItem = document.createElement('p');
                let city = filtered[0].name.includes(eventCity);
                eventItem.textContent = filtered[0].events[i];
                paragraph.appendChild(eventItem);
            }
            document.querySelector('div.events').appendChild(paragraph);
        });
}

events('Fish Haven');