
var c = ["#80d4ff", " #ff99ff", "#d580ff", "#b3cccc", "#aaff80", "#ffff99"];
  var currentColorIndex = 0;

  function changeColor() {
    document.bgColor = c[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % c.length;
    setTimeout(changeColor, 5000);
  }
  console.log(c);