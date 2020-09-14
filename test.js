const options = {
    weekday: 'long',
    day: 'numberic',
    month: 'long',
    year: 'numeric'
};

document.getElementById('currentdate').textContent = new Date()toLocaleDateString('en-US', options);