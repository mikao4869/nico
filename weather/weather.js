const API_KEY = 'c13a29e63f11c29530ca28a7ec17a581';

function ongeok(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
  fetch(url);
}
function ongeokerror() {
  alert("can't find you. no weather for you");
}
navigator.geolocation.getCurrentPosition(ongeok, ongeokerror);
