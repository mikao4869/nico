const images = ["green.jpg", "red.jpg", "black.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
bgImage.classList.add("img"); 
