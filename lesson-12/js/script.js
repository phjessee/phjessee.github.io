/*------ Menu Button -------*/

function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("hide");
}



/*------ 3 day Forecast -------*/

const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=40.5219&lon=-111.9391&units=imperial&appid=e592e2e06eeae47ff9c02cce63ec9adc';
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


/*------ Current Weather -------*/

const apiURL = 'https://api.openweathermap.org/data/2.5/weather?lat=40.5219&lon=-111.9391&appid=e592e2e06eeae47ff9c02cce63ec9adc&units=imperial';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.table(jsObject);
    let t = parseFloat(jsObject.main.temp);
    document.getElementById('temp').innerHTML = jsObject.weather[0].description;
    document.getElementById('feels').innerHTML = Math.round(t) + "&#8457;";
    document.getElementById('humidity').innerHTML = jsObject.main.humidity + "&#37;";
  });


  /*------ Weather Alert Banner -------*/
  
var x = document.getElementById('temp').value;

if (x = 'hurricane' || 'thunder storms' || 'tropical storms' || 'floods' || 'monsoon') {
  document.getElementById('alert').style.display = "none";
} else {
  document.getElementById("alert").style.display = "block";
};




/*------ Footer (Last Modified) -------*/

var x = document.lastModified;
document.getElementById("currentDate").innerHTML = x;

var n = new Date();
var y = n.getFullYear();
document.getElementById("currentYear").innerHTML = y;

WebFont.load({
    google: {
        families: ['Roboto']
    }
});