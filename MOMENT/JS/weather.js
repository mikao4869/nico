function onGeOk(position){
  const lat=position.coords.latitude;
  const lng=position.coords.longitude;
  console.log("you live in",lat,lng);
}

function onGeoError(){
alert("I can't find you!");
}

navigator.geolocation.getCurrentPosition(onGeOk,onGeoError);