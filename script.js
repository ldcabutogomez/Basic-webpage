// Source - https://stackoverflow.com/a
// Posted by Anatoliy, modified by community. See post 'Timeline' for change history
// Retrieved 2026-01-16, License - CC BY-SA 3.0

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}



function setRandomColor() {
  $("#colorpad").css("background-color", getRandomColor());
}

changeBackgroundColor = () => {
    document.body.style.backgroundColor = getRandomColor();
}