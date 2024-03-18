document.addEventListener('DOMContentLoaded', function () {
    // Replace this with the function to fetch and update temperature data from your server
    function getTemperatureData() {
        // Simulated temperature data for demonstration purposes
        return Math.floor(Math.random() * 50) + 1;
    }

    function updateTemperatureDisplay() {
        const temperatureDisplay = document.getElementById('temperatureDisplay');
        const temperatureData = getTemperatureData();

        temperatureDisplay.textContent = temperatureData + ' °C';
    }

    // Initial update and set interval to update every 10 seconds
    updateTemperatureDisplay();
    setInterval(updateTemperatureDisplay, 10000);
});
