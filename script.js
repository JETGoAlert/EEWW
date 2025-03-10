// Simulated PHIVOLCS API (Replace with real API when available)
const API_URL = "https://earthquake.phivolcs.dost.gov.ph/api/recent";

// Function to fetch earthquake alerts
async function fetchEarthquakeData() {
    try {
        let response = await fetch(API_URL);
        let data = await response.json();
        
        let latestQuake = data[0]; 

        if (latestQuake) {
            showAlert(`🚨 Magnitude ${latestQuake.magnitude} earthquake detected near ${latestQuake.location}. Depth: ${latestQuake.depth} km.`);
            playAlertSound();
            vibrateDevice();
        } else {
            showAlert("No recent earthquake detected.");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        showAlert("Could not retrieve earthquake data.");
    }
}

// Function to display an alert
function showAlert(message) {
    let alertBox = document.getElementById("alert-box");
    let alertMessage = document.getElementById("alert-message");
    
    alertMessage.textContent = message;
    alertBox.classList.add("show");
}

// Function to play alert sound
function playAlertSound() {
    let audio = new Audio("https://www.soundjay.com/button/beep-07.wav");
    audio.play();
}

// Function to vibrate device (for mobile users)
function vibrateDevice() {
    if (navigator.vibrate) {
        navigator.vibrate([500, 200, 500]); // Vibrate in a pattern
    }
}
