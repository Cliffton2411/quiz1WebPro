document.getElementById("header").addEventListener("mouseover", mouseOver);
document.getElementById("header").addEventListener("mouseout", mouseOut);

function mouseOver() {
  this.style.backgroundColor = "#8EE4AF";
}

function mouseOut() {
  this.style.backgroundColor = "#5CDB95";
}