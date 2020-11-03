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

function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}


/*##### Form Slider ####*/

var slider = document.getElementById("severity");
var output = document.getElementById("ouput");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}