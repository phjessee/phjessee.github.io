const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
};
document.getElementById('currentDate').textContent = new Date().toLocaleDateString('en-US', options);