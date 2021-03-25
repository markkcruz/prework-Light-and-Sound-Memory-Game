// Global Constants
const clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables

// Keeps track of the secret pattern of button presses. (Integers 1 - 8 are accepted)
var pattern = [];
var length;

// Assigned to an integer that represents how far along the player is in guessing the pattern. We start at 0 and use progress as an index into the pattern array.
var progress = 0;[]

// Keeps track whether game is active or not. 'true' once the the user presses START BUTTON. False once they win/lose or STOP BUTTON is pressed.
var gamePlaying = false;

// Keeps track of whether or not there is a tone playing.
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0

// Tracks of where the user is in the clue sequence.
var guessCounter = 0;

// Sound for winning the game
let yay = document.getElementById("myAudioWin");

// Sound for losing the game
let aww = document.getElementById("myAudioLose");

// Get the easy/medium/hard buttons and store them in a variable.
const easyBtn = document.getElementById("easyBtn");
const mediumBtn = document.getElementById("mediumBtn");
const hardBtn = document.getElementById("hardBtn");

/*
easyBtn.addEventListener("onclick", easyModifier);
mediumBtn.addEventListener("onclick", mediumModifier);
hardBtn.addEventListener("onclick", hardModifier);
*/

function easyModifier() {
  length = 5;
  document.getElementById("stopBtn").style.background = 'limegreen';
}

function mediumModifier() {
  length = 7;
  document.getElementById("stopBtn").style.background = 'orange';
}

function hardModifier() {
  length = 10;
  document.getElementById("stopBtn").style.background = 'red';
}


// Starts the game
function startGame() {
  //initialize game variables
  progress = 0;
  gamePlaying = true;

  // Populates the array with Ints 1-8
  pattern = [];
  for(var i = 0; i < length; i++) {
    pattern.push((Math.floor(Math.random() * 8)) + 1);
  }

  // swap the Start and Stop buttons (Hide START BUTTON, show STOP BUTTON)
  document.getElementById("easyBtn").classList.add("hidden");
  document.getElementById("mediumBtn").classList.add("hidden");
  document.getElementById("hardBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");

  // Difficulty selectors


  playClueSequence();
}

// Stops the game
function stopGame() {
  //initialize game variables
  gamePlaying = false;
  // swap the Stop and Start buttons (Show START BUTTON, hide STOP BUTTON)
  document.getElementById("easyBtn").classList.remove("hidden");
  document.getElementById("mediumBtn").classList.remove("hidden");
  document.getElementById("hardBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function loseGame() {
  stopGame();
  // Creates a sound that indicates you lost.
  playAudioLose();
  setTimeout(() => { alert("Game Over. You lost."); }, 300);
}

function winGame() {
  stopGame();
  // Creates a sound that indicates you won!
  playAudioWin();
  setTimeout(() => { alert("Game Over. You won!"); }, 300);
}

function playAudioWin() {
  yay.play();
}

function playAudioLose() {
  aww.play();
}


// lights a button
function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
// clears lit on a button
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

// AI
function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }

  // Is the button number the same as the one played in the Pattern?
  if (btn === pattern[guessCounter]) {
    // Is the turn over?
    if (progress === guessCounter) {
      //Is this the lsat turn?
      if (progress === pattern.length - 1) {
        //Player WINS!
        winGame();
      } else {
        //Increment progress, plays next clue in sequence
        progress++;
        playClueSequence();
      }
    } else {
      //Increment the guess counter
      guessCounter++;
    }
  } else {
    // Wasn't the same, so the player loses.
    loseGame();
  }

}

// Sound Synthesis Functions

// This object determines what pitch will be played for each button.
// If you pick higher numbers, you'll hear higher pitches. If you pick lower numbers, you'll hear lower pitches.
const freqMap = {
  1: 253.2,
  2: 353.2,
  3: 453.2,
  4: 553.2,
  5: 653.2,
  6: 753.2,
  7: 853.2,
  8: 953.2,
  9: 1053.2
};

// Takes a button number (1 through 4, corresponding with the four game buttons on the page) and a length of time in milliseconds (1000 milliseconds = 1 second).
// When you call this function, it plays a tone for the amount of time specified.
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}
// startTone() and stopTone() break up playing the tone into two steps.
// These startTone() and stopTone() require an argument representing a button number (1 through 4).
function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

// Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
