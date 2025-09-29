const locationAndTime = document.getElementById("locationAndTime");

function getLocationAndTime() {
    navigator.geolocation.getCurrentPosition(success, error);
}

function success(position) {
  locationAndTime.innerHTML = position.coords.latitude + "," + position.coords.longitude;
}

function error() {
  alert("Sorry, no position available.");
}