document.getElementById("header").addEventListener("mouseover", mouseOver);
document.getElementById("header").addEventListener("mouseout", mouseOut);

function mouseOver() {
  this.style.backgroundColor = "#83677B";
}

function mouseOut() {
  this.style.backgroundColor = "#64485C";
}