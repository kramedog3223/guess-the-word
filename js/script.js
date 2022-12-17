const guessedLetterElement = document.querySelector(".guessed-letters");
const guessButtonElement = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuess = document.querySelector(".remaining");
const remainingSpan = document.querySelector(".remaining span");
const messageElement = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetters = [];

const placeholder = function (word) {
  const placeholderLetter = [];
  for (const letter of word) {
    console.log(letter);
    placeholderLetter.push("●");
  }
  wordInProgress.innerText = placeholderLetter.join("");
};

placeholder(word);

guessButtonElement.addEventListener("click", function (e) {
  e.preventDefault();
  messageElement.innerText = "";
  const guess = letterInput.value;
  const goodGuess = validateInput(guess);

  if (goodGuess) {
    makeGuess(guess);
  }

  letterInput.value = "";
});

const validateInput = function (input) {
  const acceptedLetter = /[a-zA-Z]/;
  if (input.length === 0) {
    // Is the input empty?
    messageElement.innerText = "Please enter a letter.";
  } else if (input.length > 1) {
    // Did you type more than one letter?
    messageElement.innerText = "Please enter a single letter.";
  } else if (!input.match(acceptedLetter)) {
    // Did you type a number, a special character or some other non letter thing?
    messageElement.innerText = "Please enter a letter from A to Z.";
  } else {
    // We finally got a single letter, omg yay
    return input;
  }
};

const makeGuess = function (guess) {
  guess = guess.toUpperCase();
  if (guessedLetters.includes(guess)) {
    messageElement.innerText =
      "You already guessed that letter, silly. Try again.";
  } else {
    guessedLetters.push(guess);
    console.log(guessedLetters);
  }
};
