let temp = parseFloat(document.getElementById('temp').innerText);
let speed = parseFloat(document.getElementById('wind').innerText);
var chillfactor = parseInt(35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + ((0.4275 * temp) * Math.pow(speed, 0.16)));
//35.74+0.6215𝑡−35.75𝑠0.16+0.4275𝑡𝑠0.16
if (temp <= 50 && speed >= 4.8) {
    document.getElementById('chill').innerHTML = chillfactor;
} else {
    document.getElementById('chill').innerHTML = "N/A";
}