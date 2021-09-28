document.getElementById("header").addEventListener("mouseover", mouseOver);
document.getElementById("header").addEventListener("mouseout", mouseOut);

function mouseOver() {
  this.style.backgroundColor = "#7395AE";
}

function mouseOut() {
  this.style.backgroundColor = "#557A95";
}