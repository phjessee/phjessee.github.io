const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
};
document.getElementById('currentDate').textContent = new Date().toLocaleDateString('en-US', options);