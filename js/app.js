/* Variables */
var synth = window.speechSynthesis;
var textToSpeak = '';
var speakButton = document.querySelector('#speakButton');

// Arrays for Nouns, verbs, adjectives, anotherNouns, places
const nouns = ["dog", "cat", "elephant", "lion", "bird"];
const verbs = ["runs", "jumps", "sleeps", "eats", "flies"];
const adjectives = ["happily", "cunningly", "bravely", "cleverly", "friendly"];
const anotherNouns = ["table", "chair", "book", "carpet", "lamp"];
const places = ["park", "beach", "forest", "mountain", "city"];

/* Functions */
function getRandomWord(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

// Speaking Function
function speakNow() {
  var utterThis = new SpeechSynthesisUtterance(textToSpeak);
  synth.speak(utterThis);
}

/* Event Listeners */

// Button 1 Clicked
document.querySelector('#button1').onclick = function () {
  var noun = getRandomWord(nouns);
  textToSpeak += 'The ' + noun + ' ';
};

// Button 2 Clicked
document.querySelector('#button2').onclick = function () {
  var verb = getRandomWord(verbs);
  textToSpeak += verb + ' ';
};

// Button 3 Clicked
document.querySelector('#button3').onclick = function () {
  var adjective = getRandomWord(adjectives);
  textToSpeak += adjective + ' ';
};

// Button 4 Clicked
document.querySelector('#button4').onclick = function () {
  var anotherNoun = getRandomWord(anotherNouns);
  textToSpeak += ' sitting on the ' + anotherNoun + ' ';
};

// Button 5 Clicked
document.querySelector('#button5').onclick = function () {
  var place = getRandomWord(places);
  textToSpeak += ' at the ' + place + ' ';
};

// Main button Clicked
speakButton.onclick = function () {
  speakNow();
};
