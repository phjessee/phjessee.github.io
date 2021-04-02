/*------ JSON Directories -------*/

const requestURL = '/lesson-12/json/businesses.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const directories = jsonObject['businesses'];
    
    
    for (let i = 0; i < directories.length; i++) {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let phoneNum = document.createElement('p');
      let address = document.createElement('p');
      let img = document.createElement('img');

      h2.textContent = directories[i].name;
      phoneNum.textContent = 'Phone Number: ' + directories[i].phonenum;
      address.textContent = 'Address: ' + directories[i].address;
      img.setAttribute('src', directories[i].imageurl);

      card.appendChild(h2);
      card.appendChild(phoneNum);
      card.appendChild(address);
      card.appendChild(img);



      document.querySelector('div.businesses').appendChild(card);
    }
  });