document.getElementById("getLocationBtn").addEventListener("click", getLocationAndTime);

function getLocationAndTime() {
  alert("Button clicked");
  navigator.geolocation.getCurrentPosition(success, error);
}

function success(position) {
  const entry = {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,
    accuracy: position.coords.accuracy,
    timestamp: Date.now(),
    timestampIso: new Date().toISOString(),
    notes: ""
  };
  saveLog(entry);
  displayLogs();
}

function error() {
  alert("Sorry, no position available.");
}

function saveLog(entry){
  let logs = JSON.parse(localStorage.getItem("logs")) || []; //gets the logs from storage and JSON parses it OR creates an empty array
  logs.push(entry);
  const logsString = JSON.stringify(logs);
  localStorage.setItem("logs", logsString);
}

function displayLogs(){
  let logs = JSON.parse(localStorage.getItem("logs")) || []; //gets the logs from storage and JSON parses it OR creates an empty array
  const logsContainer = document.getElementById("locationAndTime");
  logsContainer.innerHTML = "";
  logs.forEach(log => {
    const logItem = document.createElement("p");
    logItem.textContent = `${log.timestampIso} → ${log.latitude}, ${log.longitude} (±${log.accuracy}m)`;
    logsContainer.appendChild(logItem);
  });
}

window.onload = displayLogs;