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
