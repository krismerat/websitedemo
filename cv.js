document.getElementById("proj0").onmouseover = function() {mouseOver()};
document.getElementById("proj0").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.getElementById("proj0").style.borderColor = "white";
  document.getElementById("proj0").style.backgroundColor = "lightgrey";

}

function mouseOut() {
  document.getElementById("proj0").style.borderColor = "black";
  document.getElementById("proj0").style.backgroundColor = "initial";
}

document.getElementById("proj1").onmouseover = function() {mouseOver1()};
document.getElementById("proj1").onmouseout = function() {mouseOut1()};

function mouseOver1() {
  document.getElementById("proj1").style.borderColor = "white";
  document.getElementById("proj1").style.backgroundColor = "lightgrey";
}

function mouseOut1() {
  document.getElementById("proj1").style.borderColor = "black";
  document.getElementById("proj1").style.backgroundColor = "initial";
}

document.getElementById("proj2").onmouseover = function() {mouseOver1()};
document.getElementById("proj2").onmouseout = function() {mouseOut1()};

function mouseOver2() {
  document.getElementById("proj2").style.borderColor = "white";
  document.getElementById("proj2").style.backgroundColor = "lightgrey";
}

function mouseOut2() {
  document.getElementById("proj2").style.borderColor = "black";
  document.getElementById("proj2").style.backgroundColor = "initial";
}

