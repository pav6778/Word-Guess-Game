var wins = 0;
var lossses = 0;
var currentWord = ["fishhook", "espionage", "beekeeper", "blizzard", "hyphen", "haphazard", "galvanize", "jackpot", "heroku", "javascript", "github", "pencil", "function", "terminal", "execute", "blueprint", "sudoku", "lymph", "matrix", "mnemonic", "megahertz", "thumbscrew", "syndrome", "stronghold", "snazzy", "sphinx", "walkway", "wimpy", "puzzling", "kiosk", "kilobyte", "juicy", "peekaboo"];
var guessesRemaining = 14;
var wordLetters = [];
var placeHolder = [];
var gameStart = false;
var lettersGuessed = [];
var word = currentWord[Math.floor(Math.random() * 33)];



for(var i = 0; i < word.length; i++) {
    document.getElementById("guess_holder").textContent = placeHolder.join('');
    placeHolder.push("_ ");
    wordLetters.push(word[i]);
}


document.onkeyup = function(event){
    var userInput = event.key;
//check if userinput == word letters inside of the wordletters array
//after that you want to change the underscore into the correct guessed letter
//if all the letters are guessed, add a new win.
// if the guess is wrong do nothing with the underscore and subtract guesses. 
// if guesses run out and then there are still letters that havent been guessed, then add to the losses. 

   
     if (event.keyCode > 64 && event.keyCode  < 91){ 


        for(var i = 0; i < word.length; i++) {
            if(userInput === wordLetters[i]) {
                //we are able to get the correct index of guessed letter–
         console.log(placeHolder[wordLetters.indexOf(wordLetters[i])].replace("_ ", wordLetters[i]))
        placeHolder[i] = placeHolder[wordLetters.indexOf(wordLetters[i])].replace("_ ", wordLetters[i])

        }
        }

        document.getElementById("guess_holder").textContent = placeHolder.join('');
       
        
 //guesses remaining 

 document.getElementById("guesses_remaining").textContent = guessesRemaining;

}

}

//I want my code to check if the letter pressed is in the array of letters of a word, if it is to print it at a corresponding location.
