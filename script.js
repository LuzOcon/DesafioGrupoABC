let colors = ["red", "green", "blue"];

// Select all <h5> elements
const h5Elements = document.querySelectorAll('h5');

// Loop through and log each <h5> element
h5Elements.forEach((h5) => {
  h5.onclick = function() {
    let randomInRange = parseInt((Math.random() * (colors.length - 0)));
    let randomColor = colors[randomInRange];
    h5.style.color = randomColor;
  }
});