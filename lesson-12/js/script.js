/*------ Menu Button -------*/

function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("hide");
}



/*------ 3 day Forecast -------*/

const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=40.5219&lon=-111.9391&units=imperial&appid=3122045cc1163ad37e5c9a13ba836046';
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

const apiURL = 'https://api.openweathermap.org/data/2.5/weather?lat=40.5219&lon=-111.9391&appid=3122045cc1163ad37e5c9a13ba836046&units=imperial';
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


/*------ JSON Directories -------*/

const requestURL = 'lesson-12/json/businesses.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const prophets = jsonObject['prophets'];
    
    for (let i = 0; i < prophets.length; i++) {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let dateOfBirth = document.createElement('p');
      let placeOfBirth = document.createElement('p');
      let img = document.createElement('img');

      h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
      dateOfBirth.textContent = 'Date of Birth: ' + prophets[i].birthdate;
      placeOfBirth.textContent = 'Place of Birth: ' + prophets[i].birthplace;
      img.setAttribute('src', prophets[i].imageurl);
      img.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname +' - ' + prophets[i].order);

      card.appendChild(h2);
      card.appendChild(dateOfBirth);
      card.appendChild(placeOfBirth);
      card.appendChild(img);

      document.querySelector('div.businesses').appendChild(card);
    }
  });

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