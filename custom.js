let body = document.querySelector('.body');

let wrapper = document.querySelector('.wrapper');

let button = document.querySelector('.btn');

let colorShow = document.querySelector('.show-color');

let hexValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];



button.addEventListener('click', function() {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hexValue[randomColor()];
    }
    body.style.backgroundColor = hexColor;
    colorShow.innerHTML = hexColor;
})

function randomColor() {
    let ranColor = Math.floor(Math.random() * hexValue.length);
    return ranColor;
    // console.log(ranColor);
}