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