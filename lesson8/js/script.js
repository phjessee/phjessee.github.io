/*######## Menu Button #####*/

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}


/*######## Footer Date #####*/
try {
    const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
    document.getElementById('currentDate').textContent = new Date().toLocaleDateString('en', options);
} catch (e) {
}

/*##### Form Slider ####*/

var slider = document.getElementById("severity");
var output = document.getElementById("output");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
}