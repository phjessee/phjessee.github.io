const options = {weekday: 'long', day: "numberic", month: 'long', year: 'numberic'};
document.getElementById('currentDate').textContent = new Date().toLocaleDateString ('en-US', options);


function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("hide");
}
//var x = document.lastModified;
//document.getElementById("currentDate").innerHTML = x;