var boxes = document.querySelectorAll(".box");
var rgbspan = document.querySelector("#rgbSpan");
var colors = generateRandomColor(6);
var pickedColor = colors[Math.floor(Math.random() * 6)];
rgbspan.textContent = pickedColor;
var newColorsBtn = document.querySelector("#newColorsBtn");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var boxCount = 6;
var statusText = document.querySelector(".status");
statusText.textContent = "Let's Play!";

function generateRandomColor(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

for (var i = 0; i < colors.length; i++) {
  boxes[i].style.background = colors[i];
  boxes[i].addEventListener("click", function () {
    var selectedColor = this.style.background;
    if (selectedColor === pickedColor) {
      win();
    } else {
      lose(this);
    }
  });
}

function win() {
  for (var i = 0; i < colors.length; i++) {
    boxes[i].style.background = pickedColor;
  }

  document.querySelector("h1").style.background = pickedColor;
  statusText.textContent = "Correct!";
}

function lose(a) {
    a.style.background = "rgb(108, 100, 139)";
    statusText.textContent = "Try Again!"
}



easyBtn.addEventListener("click", function () {
  // console.log("Button Clicked!");
  document.querySelector("h1").style.background = "rgb(107, 186, 167)";
  statusText.textContent = "Good Luck!";
  boxCount = 3;
  this.style.background = "rgb(251, 161, 0)";
  this.style.color = "rgb(251, 252, 255)";
  hardBtn.style.background = "rgb(251, 252, 255)";
  hardBtn.style.color = "rgb(251, 161, 0)";
  colors = generateRandomColor(boxCount);
  pickedColor = colors[Math.floor(Math.random() * 3)];
  rgbspan.textContent = pickedColor;

  for (var i = 0; i < boxes.length; i++) {
    if (colors[i]) {
      boxes[i].style.background = colors[i];
    } else {
      boxes[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", function () {
  document.querySelector("h1").style.background = "rgb(107, 186, 167)";
  statusText.textContent = "Good Luck!";
  boxCount = 3;
  this.style.background = "rgb(251, 161, 0)";
  this.style.color = "rgb(251, 252, 255)";
  easyBtn.style.background = "rgb(251, 252, 255)";
  easyBtn.style.color = "rgb(251, 161, 0)";
  boxCount = 6;
  colors = generateRandomColor(boxCount);
  pickedColor = colors[Math.floor(Math.random() * 6)];
  rgbspan.textContent = pickedColor;

  for (var i = 0; i < boxes.length; i++) {
    boxes[i].style.background = colors[i];
    boxes[i].style.display = "block";
  }
});

newColorsBtn.addEventListener("click", function () {
  //   console.log("Button Clicked!");
  document.querySelector("h1").style.background = "rgb(107, 186, 167)";
  statusText.textContent = "Good Luck!";
  colors = generateRandomColor(boxCount);
  pickedColor = colors[Math.floor(Math.random() * boxCount)];
  rgbspan.textContent = pickedColor;

  for (var i = 0; i < boxes.length; i++) {
    boxes[i].style.background = colors[i];
  }
});
