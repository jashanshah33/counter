var input = document.getElementById("input");
var button = document.getElementById("btn");
var nextOne = document.querySelector(".nextOne");
var currentOne = document.querySelector(".currentOne");
var nextTwo = document.querySelector(".nextTwo");
var currentTwo = document.querySelector(".currentTwo");
var nextThree = document.querySelector(".nextThree");
var currentThree = document.querySelector(".currentThree");
var nextFour = document.querySelector(".nextFour");
var currentFour = document.querySelector(".currentFour");
var nextFive = document.querySelector(".nextFive");
var currentFive = document.querySelector(".currentFive");

var oneFlag = false;
var twoFlag = false;
var threeFlag = false;
var fourFlag = false;
var fiveFlag = false;

var intervalStopper = false;

currentOne.innerText = 0;

let arry = new Array(0, 0, 0, 0, 0);

function end() {
  if (currentOne.innerText && nextOne.innerText >= 0) {
    currentOne.innerText = 0;
    nextOne.innerText = 0;
  }
}

button.addEventListener("click", end);

function startCount() {
  let interval = setInterval(function () {
    if (intervalStopper) {
      return clearInterval(interval);
    }

    nextOne.classList.add("animation");

    setTimeout(() => {
      nextOne.classList.remove("animation");
    }, 500);
  }, 1000);
}

button.addEventListener("click", startCount);

button.addEventListener("click", function () {
  nextOne.innerText = 0;
  currentOne.innerText = 0;

  nextTwo.innerText = 0;
  currentTwo.innerText = 0;

  nextThree.innerText = 0;
  currentThree.innerText = 0;

  nextFour.innerText = 0;
  currentFour.innerText = 0;

  nextFive.innerText = 0;
  currentFive.innerText = 0;

  counter();
});

function counter() {
  var upcommingValue = input.value;

  var wordLenght = String(upcommingValue.length);
  if (wordLenght == 1) {
    twoFlag = true;
  } else if (wordLenght == 2) {
    threeFlag = true;
  } else if (wordLenght == 3) {
    fourFlag = true;
  } else if (wordLenght == 4) {
    fiveFlag = true;
  }

  for (let i = 0; i < 5; i++) {
    var lastValue = upcommingValue % 10;

    arry[i] = lastValue;

    upcommingValue = parseInt(upcommingValue / 10);
  }

  let interval = setInterval(() => {
    nextOne.innerText++;
    currentOne.innerText++;

    secondValue();
    console.log(twoFlag);
    if (twoFlag) {
      if (arry[0] == currentOne.innerText) {
        oneFlag = true;
        intervalStopper = true;
        clearInterval(interval);

        setTimeout(() => {
          alert("Counter Completed");
        }, 10);
      }
    }
  }, 1000);
}

function secondValue() {
  if (currentOne.innerText && nextOne.innerText == 10) {
    nextTwo.innerText++;
    currentTwo.innerText++;

    nextOne.innerText = 0;
    currentOne.innerText = 0;

    if (currentTwo.innerText == 10) {
      thirdValue();
    }

    if (threeFlag == true) {
      if (arry[1] == nextTwo.innerText) {
        twoFlag = true;
      }
    }
  }
}

function thirdValue() {
  if (currentTwo.innerText && nextTwo.innerText == 10) {
    nextThree.innerText++;
    currentThree.innerText++;

    nextTwo.innerText = 0;
    currentTwo.innerText = 0;

    if (currentThree.innerText == 10) {
      forthValue();
    }

    if (fourFlag == true) {
      if (arry[2] == nextThree.innerText) {
        threeFlag = true;
      }
    }
  }
}

function forthValue() {
  if (currentThree.innerText && nextThree.innerText == 10) {
    nextFour.innerText++;
    currentFour.innerText++;

    nextThree.innerText = 0;
    currentThree.innerText = 0;

    if (currentFour.innerText == 10) {
      fifthValue();
    }

    if (fiveFlag == true) {
      if (arry[3] == nextFour.innerText) {
        fourFlag = true;
      }
    }
  }
}

function fifthValue() {
  if (currentFour.innerText && nextFour.innerText == 10) {
    nextFive.innerText++;
    currentFive.innerText++;

    nextFour.innerText = 0;
    currentFour.innerText = 0;

    if (arry[4] == nextFive.innerText) {
      fiveFlag = true;
    }
  }
}
