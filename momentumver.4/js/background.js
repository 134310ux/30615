// const images = ["o.jpeg", "1.jpeg", "2.jpeg"];

// chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");

// bgImage.src = `img/${chosenImage}`;

// document.body.appendChild(bgImage);

const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
  ];
  
  const chosenImage = images[Math.floor(Math.random() * images.length)];
  
  const bgImg = "url('assets/" + chosenImage + "')";
  document.body.style.backgroundImage = bgImg;