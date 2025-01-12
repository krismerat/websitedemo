document.getElementById("proj0").onmouseover = function() {mouseOver()};
document.getElementById("proj0").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.getElementById("proj0").style.borderColor = "red";
}

function mouseOut() {
  document.getElementById("proj0").style.borderColor = "black";
}

document.getElementById("proj1").onmouseover = function() {mouseOver1()};
document.getElementById("proj1").onmouseout = function() {mouseOut1()};

function mouseOver1() {
  document.getElementById("proj1").style.borderColor = "red";
}

function mouseOut1() {
  document.getElementById("proj1").style.borderColor = "black";
}

document.getElementById("proj2").onmouseover = function() {mouseOver1()};
document.getElementById("proj2").onmouseout = function() {mouseOut1()};

function mouseOver2() {
  document.getElementById("proj2").style.borderColor = "red";
}

function mouseOut2() {
  document.getElementById("proj2").style.borderColor = "black";
}