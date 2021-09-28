document.getElementById("header").addEventListener("mouseover", mouseOver);
document.getElementById("header").addEventListener("mouseout", mouseOut);

function mouseOver() {
  this.style.backgroundColor = "#E3AFBC";
}

function mouseOut() {
  this.style.backgroundColor = "#9A1750";
}