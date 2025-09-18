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
const encabezado = document.getElementById('cambiaColor');

encabezado.onclick = function colorAleatorio() {
    const h3s= document.getElementsByTagName('h3')
    const h1s= document.getElementsByTagName('h1')
    const colors = ['red', 'green', 'blue'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    for (let i = 0; i < h3s.length; i++){
        h3s[i].style.color = randomColor;
        h1s[i].style.color = randomColor;
    }
}
