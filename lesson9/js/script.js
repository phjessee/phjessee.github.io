/*######## Menu Button #####*/

function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("hide");
}


/*######## Footer Date #####*/
try {
    const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
    document.getElementById('currentDate').textContent = new Date().toLocaleDateString('en-US', options);
} catch (e) {
    alert('Error with code or your browser does not support Locale');
}


/*######## Pancakes Banner #####*/

var d = new Date();
var x = d.getDay();

if (x == 5) {
    document.getElementById('message').style.display = "block";
}
else {
   document.getElementById("message").style.display = "none";
}


/*######## JSON for home page #######*/

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];
    
    for (let i = 0; i < towns.length; i++) {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let motto = document.createElement('h4');
      let yearFounded = document.createElement('p');
      let currentPopulation = document.createElement('p');
      let avgRainfall = document.createElement('p');
      let photo = document.createElement('img');

      h2.textContent = towns[i].name + ' ' + towns[i].name;
      motto.textContent = 'Motto: ' + towns[i].motto;
      yearFounded.textContent = 'Year Found: ' + towns[i].yearFound;
      currentPopulation.textContent = 'Current Population: ' + towns[i].currentPopulation;
      avgRainfall.textContent = 'Average Rainfall: ' + towns[i].avgRainfall;
      photo.setAttribute('src', towns[i].photo);

      card.appendChild(h2);
      card.appendChild(motto);
      card.appendChild(photo);
      card.appendChild(yearFounded);
      card.appendChild(currentPopulation);
      card.appendChild(avgRainfall);
      
      document.querySelector('div.cards').appendChild(card);
    }
  });