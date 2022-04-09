var durmEvents = document.querySelectorAll(".drum");

// mouse click
for (var i = 0; i < durmEvents.length; i++) {
  durmEvents[i].addEventListener("click", function () {
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}

//keypad press
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  if (
    event.key == "k" ||
    event.key == "l" ||
    event.key == "j" ||
    event.key == "w" ||
    event.key == "a" ||
    event.key == "s" ||
    event.key == "d"
  ) {
    buttonAnimation(event.key);
  }
});

function makeSound(key) {
  switch (key) {
    case "k":
      var audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("./sounds/snare.mp3");
      audio.play();
      break;
    case "w":
      var audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
      break;

    default:
      console.log(key);
      break;
  }
}

function buttonAnimation(key) {
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");
  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 500);
}
