/*const miTitulo = document.querySelector('h1');
miTitulo.textContent = '¡Hola mundo!';*/

let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/firefox-icon.png') {
      miImage.setAttribute('src','images/image2.png');
    } else {
      miImage.setAttribute('src', 'images/firefox-icon.png');
    }
}