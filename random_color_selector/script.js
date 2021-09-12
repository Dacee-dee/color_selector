let colorInput = document.querySelector('#color');
// console.log(colorInput);

let hexInput = document.querySelector('#hex');
// console.log(hexInput);

colorInput.addEventListener('input', () => {
    let color = colorInput.value;
    hexInput.value = color;
    // console.log(color);
    document.body.style.backgroundColor = color;
});