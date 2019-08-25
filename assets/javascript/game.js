var s1 = document.getElementById("myAudio");
var s2 = document.getElementById("myAudio2");

var wins = 0;
var lossses = 0;
var currentWord = [
  "fishhook",
  "espionage",
  "beekeeper",
  "blizzard",
  "hyphen",
  "haphazard",
  "galvanize",
  "jackpot",
  "heroku",
  "javascript",
  "github",
  "pencil",
  "function",
  "terminal",
  "execute",
  "blueprint",
  "sudoku",
  "lymph",
  "matrix",
  "mnemonic",
  "megahertz",
  "thumbscrew",
  "syndrome",
  "stronghold",
  "snazzy",
  "sphinx",
  "walkway",
  "wimpy",
  "puzzling",
  "kiosk",
  "kilobyte",
  "juicy",
  "peekaboo"
];
var guessesRemaining = 14;
var wordLetters = [];
var placeHolder = [];
var lettersGuessed = [];
var word = currentWord[Math.floor(Math.random() * 33)];
var img = new Array();
img[0] = "";
img[1] = "assets/images/shot1.png";
img[2] = "assets/images/shot2.png";
img[3] = "assets/images/shot3.png";
img[4] = "assets/images/shot4.png";
img[5] = "assets/images/shot5.png";
img[6] = "assets/images/shot6.png";
img[7] = "assets/images/shot7.png";
img[8] = "assets/images/shot8.png";
img[9] = "assets/images/shot9.png";
img[10] = "assets/images/shot10.png";
img[11] = "assets/images/shot11.png";
img[12] = "assets/images/shot12.png";
img[13] = "assets/images/shot13.png";
img[14] = "assets/images/shot14.png";
var num = 0;

for (var i = 0; i < word.length; i++) {
  document.getElementById("guess_holder").textContent = placeHolder.join("");
  placeHolder.push("_");
  wordLetters.push(word[i]);
}
function playAudio(){
    s1.play()
}
function playAudio2(){
    s2.play()
}
function reset() {
  var currentWord = [
    "fishhook",
    "espionage",
    "beekeeper",
    "blizzard",
    "hyphen",
    "haphazard",
    "galvanize",
    "jackpot",
    "heroku",
    "javascript",
    "github",
    "pencil",
    "function",
    "terminal",
    "execute",
    "blueprint",
    "sudoku",
    "lymph",
    "matrix",
    "mnemonic",
    "megahertz",
    "thumbscrew",
    "syndrome",
    "stronghold",
    "snazzy",
    "sphinx",
    "walkway",
    "wimpy",
    "puzzling",
    "kiosk",
    "kilobyte",
    "juicy",
    "peekaboo"
  ];
  guessesRemaining = 14;
  wordLetters = [];
  placeHolder = [];
  lettersGuessed = [];
  word = currentWord[Math.floor(Math.random() * 33)];
  img = new Array();
  img[0] = ""
  img[1] = "assets/images/shot1.png";
  img[2] = "assets/images/shot2.png";
  img[3] = "assets/images/shot3.png";
  img[4] = "assets/images/shot4.png";
  img[5] = "assets/images/shot5.png";
  img[6] = "assets/images/shot6.png";
  img[7] = "assets/images/shot7.png";
  img[8] = "assets/images/shot8.png";
  img[9] = "assets/images/shot9.png";
  img[10] = "assets/images/shot10.png";
  img[11] = "assets/images/shot11.png";
  img[12] = "assets/images/shot12.png";
  img[13] = "assets/images/shot13.png";
  img[14] = "assets/images/shot14.png";
  num = 0;
  
  for (var i = 0; i < word.length; i++) {
      document.getElementById("guess_holder").textContent = placeHolder.join(
          ""
          );
          placeHolder.push("_");
          wordLetters.push(word[i]);
        }
        document.getElementById("guesses_remaining").textContent = guessesRemaining;
        document.getElementById("guessed_letters").textContent = lettersGuessed;
        document.getElementById("guess_holder").textContent = placeHolder.join("");
        document.getElementById("hangman_img").src = img[num];
}
document.onkeyup = function(event) {
  var userInput = event.key;



  if (event.keyCode > 64 && event.keyCode < 91 && event.key !== lettersGuessed[0] && event.key !== lettersGuessed[1] && event.key !== lettersGuessed[2] && event.key !== lettersGuessed[3] && event.key !== lettersGuessed[4] && event.key !== lettersGuessed[5] && event.key !== lettersGuessed[6] && event.key !== lettersGuessed[7] && event.key !== lettersGuessed[8] && event.key !== lettersGuessed[9] && event.key !== lettersGuessed[10] && event.key !== lettersGuessed[11] && event.key !== lettersGuessed[12] && event.key !== lettersGuessed[13] && event.key !== lettersGuessed[14] && event.key !== lettersGuessed[15] && event.key !== lettersGuessed[16] && event.key !== lettersGuessed[17]) {


    for (var i = 0; i < word.length; i++) {
      if (userInput === wordLetters[i]) {

        console.log(
          placeHolder[wordLetters.indexOf(wordLetters[i])].replace(
            "_ ",
            wordLetters[i]
          )
        );
        placeHolder[i] = placeHolder[
          wordLetters.indexOf(wordLetters[i])
        ].replace("_", wordLetters[i]);
      }
    }
    document.getElementById("guess_holder").textContent = placeHolder.join("");
    lettersGuessed.push(userInput);
    lettersGuessed = [...new Set(lettersGuessed)];
    document.getElementById("guessed_letters").textContent = lettersGuessed;

    if (placeHolder.join("") === word) {
      wins++;
      setTimeout(function(){
      reset();
    }, 500);
      playAudio()
    }
    document.getElementById("wins").textContent = wins;
    //if guessed letter is incorrect decrement guessesRemaining and change images



    if ( // user already clicked a letter, remove it from options
      userInput !== wordLetters[0] &&
      userInput !== wordLetters[1] &&
      userInput !== wordLetters[2] &&
      userInput !== wordLetters[3] &&
      userInput !== wordLetters[4] &&
      userInput !== wordLetters[5] &&
      userInput !== wordLetters[6] &&
      userInput !== wordLetters[7] &&
      userInput !== wordLetters[8] &&
      userInput !== wordLetters[9]
    ) {
      num++;
      document.getElementById("hangman_img").src = img[num];
      guessesRemaining--;
    }

    //show remaining guesses
    document.getElementById("guesses_remaining").textContent = guessesRemaining;
  }
  setTimeout(function() {
  if (guessesRemaining <= 0) {
    lossses++;

    reset()
    playAudio2()
  }}, 500);
};
