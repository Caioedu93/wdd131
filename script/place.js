
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

function calculateWindChill(temp, windSpeed) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
}

function updateWindChill() {
    const temperature = parseFloat(document.getElementById('temperature-input').value);
    const windSpeed = parseFloat(document.getElementById('wind-speed-input').value);

    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed);
        document.getElementById('wind-chill').textContent = windChill.toFixed(2) + '°C';
    } else {
        document.getElementById('wind-chill').textContent = 'N/A';
    }
}


document.getElementById('calculate-button').addEventListener('click', updateWindChill);

updateWindChill();
