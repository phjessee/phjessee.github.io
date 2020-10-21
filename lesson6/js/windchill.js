

let t = parseFloat(document.getElementById('temp').innerText);
let s = parseFloat(document.getElementById('wind').innerText);
var f = (35.74+ (0.6215 * t)−(35.75 * math.pow(s, 0.16) + (0.4275 * t * math.pow(s, 0.16)); 
document.getElementById('chill').innerHTML = f;
 






/*var f = windchill factor in Fahrenheit;
var s = wind speed in mph;
console.log(windchill);

if (windchill >= 50) {
    console.log('This is the windchill');
} else {
    document.getElementById("windChill").innerHTML = "N/A";
}*/