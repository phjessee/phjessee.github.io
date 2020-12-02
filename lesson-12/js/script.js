/*------ Menu Button -------*/

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
  }

  const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.4230&lon=-86.9223&units=imperial&appid=f59f532633b10d55bbf07be7f8538bff';
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