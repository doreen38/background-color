function changeColor() {
    let color =document.getElementById('colorInputColor').value;
    document.body.style.backgroundColor =color;
    document.getElementById('colorInputText') .value=color
  }