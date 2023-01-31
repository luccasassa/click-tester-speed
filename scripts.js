let startTime = new Date().getTime();
let endTime;
let timeDifference;
let timeOut;
let fastestTime = 10000000000000;

function drawShape() {
  let randomLeft, randomTop;
  randomLeft = Math.floor(Math.random() * 86) + 10;
  randomTop = Math.floor(Math.random() * 76) + 10;

  let shape = document.querySelector("#shape").style;
  shape.left = randomLeft + "vw";
  shape.top = randomTop + "vh";
  shape.display = "block";
  startTime = new Date().getTime();
}

function calculateFastestTime() {
  if (timeDifference / 1000 < fastestTime) {
    fastestTime = timeDifference / 1000;
    document.querySelector("#timeTaken").style.color = "#80ed99";

  } else {
    document.querySelector("#timeTaken").style.color = "white";
  }
}

document.querySelector("#shape").onclick = function () {
  document.querySelector("#shape").style.display = "none";
  document.querySelector("#start").style.display = "none";
  
  endTime = new Date().getTime();
  timeDifference = endTime - startTime;
  calculateFastestTime();
  
  document.querySelector("#timeTaken").innerHTML = timeDifference / 1000 + "<span> seconds </span>";
  
  timeOut = Math.random() * 2000;
  console.log(timeOut);
  setTimeout(drawShape, timeOut);
};
