const clock=document.querySelector("h2#clock")

function getClock(){

  console.log("hello");
  const document=new Date();
  console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
  }

setInterval(getClock,10000);