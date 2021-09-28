document.getElementById("header").addEventListener("mouseover", mouseOver);
document.getElementById("header").addEventListener("mouseout", mouseOut);

function mouseOver() {
  this.style.backgroundColor = "#C5CBE3";
}

function mouseOut() {
  this.style.backgroundColor = "#4056A1";
}