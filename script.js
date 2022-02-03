// Set the variables
let totalScore;
let roundScore;
let activePlayer;

newStart();

// create variable for disfuncional game
playGame = true;
function newStart() {
  playGame = true;
  totalScore = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  // Remove the score and hide the cubes
  document.getElementById("playerScore0").textContent = 0;
  document.getElementById("playerScore1").textContent = 0;
  document.getElementById("playerCurrentScore0").textContent = 0;
  document.getElementById("playerCurrentScore1").textContent = 0;
  document.querySelector(".img-1").style.display = "none";
  document.querySelector(".img-2").style.display = "none";
  document.querySelector(".img-3").style.display = "none";
  // Reset the names
  document.getElementById("Player0").textContent = "Player 1";
  document.getElementById("Player1").textContent = "Player 2";
  // remove the active Player
  document.querySelector(".totalScore0").classList.add("active");
  document.querySelector(".totalScore1").classList.remove("active");
}

// Create function for random number
function randomNumber() {
  let arrayLenght = 3;
  let randomArrayNumbers = [];
  if (playGame)
    for (let i = 0; i < arrayLenght; i++) {
      randomArrayNumbers.push(Math.ceil(Math.random() * 6));
      // console.log(randomArrayNumbers);
    }
  return randomArrayNumbers;
}
// console.log(randomNumber());
// Create listener for random number
document.querySelector(".rollCube").addEventListener("click", function () {
  let randomNumbers = [];
  randomNumbers = randomNumber();
  console.log(randomNumbers);
  // add first random number to img 1
  document.querySelector(".img-1").textContent = randomNumbers[0];
  // add first random number to img 2

  document.querySelector(".img-2").textContent = randomNumbers[1];
  // add first random number to img 3
  document.querySelector(".img-3").textContent =
    randomNumbers[randomNumbers.length - 1];

  // choose the right img
  let image1 = document.querySelector(".img-1");
  image1.src = "img/" + randomNumbers[0] + ".jpg";
  document.querySelector(".img-1").style.display = "block";

  // choose the right img
  let image2 = document.querySelector(".img-2");
  image2.src = "img/" + randomNumbers[1] + ".jpg";
  document.querySelector(".img-2").style.display = "block";

  // choose the right img
  let image3 = document.querySelector(".img-3");
  image3.src = "img/" + randomNumbers[randomNumbers.length - 1] + ".jpg";
  document.querySelector(".img-3").style.display = "block";

  // Calculate all numbers together
  let calculateNumber = 0;
  for (let i = 0; i < randomNumbers.length; i++) {
    calculateNumber += randomNumbers[i];
  }
  console.log(calculateNumber);
  // make a condicion for game
  if (calculateNumber !== 15) {
    roundScore = roundScore + calculateNumber;
    document.getElementById("playerCurrentScore" + activePlayer).textContent =
      roundScore;
  } else {
    nextPlayer();
  }
});
// Create function nextPlayer
function nextPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  // reset roundScore and hide the imgs
  roundScore = 0;
  document.getElementById("playerCurrentScore0").textContent = 0;
  document.getElementById("playerCurrentScore1").textContent = 0;
  document.querySelector(".img-1").style.display = "none";
  document.querySelector(".img-2").style.display = "none";
  document.querySelector(".img-3").style.display = "none";
  // Set active style to active player
  document.querySelector(".totalScore0").classList.toggle("active");
  document.querySelector(".totalScore1").classList.toggle("active");
}

// holdScore listener
document.querySelector(".holdScore").addEventListener("click", function () {
  if (playGame)
    totalScore[activePlayer] = totalScore[activePlayer] + roundScore;
  document.getElementById("playerScore" + activePlayer).textContent =
    totalScore[activePlayer];
  // console.log(totalScore);
  // make a condition for winner
  if (totalScore[activePlayer] >= 250) {
    document.getElementById("Player" + activePlayer).textContent =
      "You Are The Winner";
    document.querySelector(".img-1").style.display = "none";
    document.querySelector(".img-2").style.display = "none";
    document.querySelector(".img-3").style.display = "none";
    playGame = false;
  } else {
    nextPlayer();
  }
});

// newGame listener
document.querySelector(".newGame").addEventListener("click", newStart);

// Modal From Code Pen

/* This script supports IE9+ */
(function () {
  /* Opening modal window function */
  function openModal() {
    /* Get trigger element */
    var modalTrigger = document.getElementsByClassName("jsModalTrigger");

    /* Set onclick event handler for all trigger elements */
    for (var i = 0; i < modalTrigger.length; i++) {
      modalTrigger[i].onclick = function () {
        var target = this.getAttribute("href").substr(1);
        var modalWindow = document.getElementById(target);

        modalWindow.classList
          ? modalWindow.classList.add("open")
          : (modalWindow.className += " " + "open");
      };
    }
  }

  function closeModal() {
    /* Get close button */
    var closeButton = document.getElementsByClassName("jsModalClose");
    var closeOverlay = document.getElementsByClassName("jsOverlay");

    /* Set onclick event handler for close buttons */
    for (var i = 0; i < closeButton.length; i++) {
      closeButton[i].onclick = function () {
        var modalWindow = this.parentNode.parentNode;

        modalWindow.classList
          ? modalWindow.classList.remove("open")
          : (modalWindow.className = modalWindow.className.replace(
              new RegExp(
                "(^|\\b)" + "open".split(" ").join("|") + "(\\b|$)",
                "gi"
              ),
              " "
            ));
      };
    }

    /* Set onclick event handler for modal overlay */
    for (var i = 0; i < closeOverlay.length; i++) {
      closeOverlay[i].onclick = function () {
        var modalWindow = this.parentNode;

        modalWindow.classList
          ? modalWindow.classList.remove("open")
          : (modalWindow.className = modalWindow.className.replace(
              new RegExp(
                "(^|\\b)" + "open".split(" ").join("|") + "(\\b|$)",
                "gi"
              ),
              " "
            ));
      };
    }
  }

  /* Handling domready event IE9+ */
  function ready(fn) {
    if (document.readyState != "loading") {
      fn();
    } else {
      document.addEventListener("DOMContentLoaded", fn);
    }
  }

  /* Triggering modal window function after dom ready */
  ready(openModal);
  ready(closeModal);
})();
