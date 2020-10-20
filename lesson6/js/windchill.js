var windchill = 35.74+0.6215t−35.75s 0.16+0.4275ts0.16;
var t = Fahrenheit temp;
var f = windchill factor in Fahrenheit;
var s = wind speed in mph;
console.log(windchill);

if (windchill >= 50) {
    console.log('This is the windchill');
} else {
    document.getElementById("windChill").innerHTML = "N/A";
}