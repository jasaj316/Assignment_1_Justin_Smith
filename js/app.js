// Create a new speechSynthesis variable
let synth = window.speechSynthesis;
// initializing text to speak
let fullString = "";
// getting buttons
const speakButton = document.querySelector("#speak");
const randomButton = document.querySelector("#random");
const optionButtons = document.querySelectorAll(".option-buttons > *");
// getting p for final text
let textP = document.querySelector("section > p");
// array containing the words of each selection
let choiceWords = [
  ["The turkey", "Mom", "Dad", "The dog", "My Teacher", "The elephant", "The cat"],
  ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"],
  ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"],
  ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"],
  ["on the moon.", "on the chair.", "in my spaghetti.", "in my soup.", "on the grass.", "in my shoes."]
];

// new array to track current choice values
let choiceVals = [0, 0, 0, 0, 0];


// function to randomize choiceVals
function randomizeChoice() {
  // randomize & set the button text to the value
  optionButtons.forEach((button, i) => {
    choiceVals[i] = randIntZeroTo(choiceWords[i].length);
    button.innerHTML = `${choiceWords[i][choiceVals[i]]}`;
  })
};

// create full string & set innerHTML to it
function createString() {
  fullString = `${choiceWords[0][choiceVals[0]]} ${choiceWords[1][choiceVals[1]]} 
  ${choiceWords[2][choiceVals[2]]} ${choiceWords[3][choiceVals[3]]} ${choiceWords[4][choiceVals[4]]}`;
  textP.innerHTML = fullString;
}

// turns the string into a SpeechSynthesisUtterance, speaks it
function speakString(text = "") {
  if (synth.speaking) { synth.cancel() };
  synth.speak(new SpeechSynthesisUtterance(text));
};

// make a random int
function randIntZeroTo(num = 1) {
  return Math.floor(Math.random() * num);
};

// creates the string, speaks
speakButton.onclick = () => {
  createString();
  speakString(fullString);
};

// assigns a random number to each choiceVal, creates string, speaks
randomButton.onclick = () => {
  randomizeChoice();
  createString();
  speakString(fullString);
};

// scroll through the values of choiceVals & speak on click
optionButtons.forEach((button, i) => {
  button.onclick = () => {
    // increment between 0 and choiceWords length
    choiceVals[i] < choiceWords[i].length - 1 ? choiceVals[i]++ : choiceVals[i] = 0;
    // set button text and speak
    button.innerHTML = `${choiceWords[i][choiceVals[i]]}`;
    speakString(button.innerHTML);
  }
});

// randomize on load
randomizeChoice();