// Assignment 1 | COMP1073 Client-Side JavaScript
/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
let synth = window.speechSynthesis;
// initializing text to speak let
let textToSpeak = "";
// getting buttons, assigning to lets
let speakButton = document.querySelector("#speak");
let randomButton = document.querySelector("#random");
let button1 = document.querySelector("#choice1");
let button2 = document.querySelector("#choice2");
let button3 = document.querySelector("#choice3");
let button4 = document.querySelector("#choice4");
let button5 = document.querySelector("#choice5");
// getting p, assigning to let
let textP = document.querySelector("body > main > section > p");
// array containing the words of each selection
let choiceWords = [
  ["The turkey ", "Mom ", "Dad ", "The dog ", "My Teacher ", "The elephant ", "The cat "],
  ["sat on ", "ate ", "danced with ", "saw ", "doesn't like ", "kissed "],
  ["a funny ", "a scary ", "a goofy ", "a funny ", "a slimy ", "a barking ", "a fat "],
  ["goat ", "monkey ", "fish ", "cow ", "frog ", "bug ", "worm "],
  ["on the moon.", "on the chair.", "in my spaghetti.", "in my soup.", "on the grass.", "in my shoes."]
];
// new array to track current choice values
let choiceVals = [0, 0, 0, 0, 0];
//randomize choices on load
for (i = 0; i < choiceVals.length; i++) {
  choiceVals[i] = randIntZeroTo(6);
}
// these two have one less option, so I have to re-assign a random number between 0 and 5
choiceVals[1] = randIntZeroTo(5);
choiceVals[4] = randIntZeroTo(5);
// set the button text to the first values
button1.innerHTML = `${choiceWords[0][choiceVals[0]]}`;
button2.innerHTML = `${choiceWords[1][choiceVals[1]]}`;
button3.innerHTML = `${choiceWords[2][choiceVals[2]]}`;
button4.innerHTML = `${choiceWords[3][choiceVals[3]]}`;
button5.innerHTML = `${choiceWords[4][choiceVals[4]]}`;

//functions to scroll through the values of choiceVals on click
button1.onclick = function() {
  if (choiceVals[0] < 6) {
    choiceVals[0]++;
  } else {
    choiceVals[0] = 0;
  }
  button1.innerHTML = `${choiceWords[0][choiceVals[0]]}`;
  speakNow(button1.innerHTML);
};
button2.onclick = function() {
  if (choiceVals[1] < 5) {
    choiceVals[1]++;
  } else {
    choiceVals[1] = 0;
  }
  button2.innerHTML = `${choiceWords[1][choiceVals[1]]}`;
  speakNow(button2.innerHTML);
};
button3.onclick = function() {
  if (choiceVals[2] < 6) {
    choiceVals[2]++;
  } else {
    choiceVals[2] = 0;
  }
  button3.innerHTML = `${choiceWords[2][choiceVals[2]]}`;
  speakNow(button3.innerHTML);
};
button4.onclick = function() {
  if (choiceVals[3] < 6) {
    choiceVals[3]++;
  } else {
    choiceVals[3] = 0;
  }
  button4.innerHTML = `${choiceWords[3][choiceVals[3]]}`;
  speakNow(button4.innerHTML);
};
button5.onclick = function() {
  if (choiceVals[4] < 5) {
    choiceVals[4]++;
  } else {
    choiceVals[4] = 0;
  }
  button5.innerHTML = `${choiceWords[4][choiceVals[4]]}`;
  speakNow(button5.innerHTML);
};

// new function taking a string, turns it into a SpeechSynthesisUtterance, speaks it
function speakNow(string) {
  let utterThis = new SpeechSynthesisUtterance(string);
  synth.speak(utterThis);
}
// new function that will make a random int
function randIntZeroTo(num) {
  return Math.floor(Math.random() * Math.floor(num + 1));
}
// create the text string, speak
speakButton.onclick = function() {
  textToSpeak = `${choiceWords[0][choiceVals[0]]}${choiceWords[1][choiceVals[1]]}${
    choiceWords[2][choiceVals[2]]
  }${choiceWords[3][choiceVals[3]]}${choiceWords[4][choiceVals[4]]}`;
  textP.innerHTML = textToSpeak;
  speakNow(textP.innerHTML);
};
// assigns a random valid number to each choice, create the text string, speak
randomButton.onclick = function() {
  // randomizes all values between 0 and 6
  for (i = 0; i < choiceVals.length; i++) {
    choiceVals[i] = randIntZeroTo(6);
  }
  // these two have one less option, so I have to re-assign a random number between 0 and 5
  choiceVals[1] = randIntZeroTo(5);
  choiceVals[4] = randIntZeroTo(5);
  // set all button text to the randomly selected values
  button1.innerHTML = `${choiceWords[0][choiceVals[0]]}`;
  button2.innerHTML = `${choiceWords[1][choiceVals[1]]}`;
  button3.innerHTML = `${choiceWords[2][choiceVals[2]]}`;
  button4.innerHTML = `${choiceWords[3][choiceVals[3]]}`;
  button5.innerHTML = `${choiceWords[4][choiceVals[4]]}`;
  // same as regular speak button
  textToSpeak = `${choiceWords[0][choiceVals[0]]}${choiceWords[1][choiceVals[1]]}${
    choiceWords[2][choiceVals[2]]
  }${choiceWords[3][choiceVals[3]]}${choiceWords[4][choiceVals[4]]}`;
  textP.innerHTML = textToSpeak;
  speakNow(textP.innerHTML);
};
