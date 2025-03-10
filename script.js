document.addEventListener("DOMContentLoaded", function () {
    const alertContainer = document.createElement("div");
    alertContainer.id = "earthquake-alert";
    document.body.appendChild(alertContainer);

    function fetchEarthquakeData() {
        fetch("https://earthquake.phivolcs.dost.gov.ph/api/v1/latest")
            .then(response => response.json())
            .then(data => displayAlert(data))
            .catch(error => console.error("Error fetching data:", error));
    }

    function displayAlert(data) {
        if (data.magnitude > 4.5) {
            alertContainer.innerHTML = `<strong>🚨 Earthquake Alert: ${data.magnitude}M</strong><br>
                                        Location: ${data.location}<br>
                                        Depth: ${data.depth} km`;
            alertContainer.style.background = "red";
        }
    }

    setInterval(fetchEarthquakeData, 60000); // Fetch data every 60 seconds
});
