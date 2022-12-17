const guessedLetterElement = document.querySelector(".guessed-letters");
const guessButtonElement = document.querySelector(".guess");
const letterElement = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuess = document.querySelector(".remaining");
const remainingSpan = document.querySelector(".remaining span");
const messageElement = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";

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
  const guess = letterElement.value;
  console.log(guess);
  letterElement.value = "";
});
