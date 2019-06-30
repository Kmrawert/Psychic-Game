    // <!-- Array Here!! -->
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var yourGuesses = [];

    // This code is the computer's letter guess (Answer)
    var computerGuess = letters[Math.floor(Math.random() * letters.length)];
       //document.write(computerGuess);
    
    function newComputerGuess() {
        newComputerGuess= letters[Math.floor(Math.random() * letters.length)];
        };

    function updateYourGuesses() {
        document.querySelector('#yourGuesses').innerHTML = yourGuesses.join(', ');
        };

    function updateGuessesLeft() {
        document.querySelector('#guessesLeft').innerHTML = guessesLeft;
        };
       
    var reset = function () {
        guessesLeft = 9;
        yourGuesses = [];
        newComputerGuess
    };
        
    var userText = document.getElementById("user-text");
        document.onkeyup = function(event){
        userText.innerHTML = yourGuesses;
        

    var check = computerGuess.includes(yourGuesses);

    if (check === false){
        alert("Sorry, try again!");
        return false;
    } else if (check === true){
        guessesLeft--;
        yourGuesses.push(event.key);
        updateGuessesLeft();
        updateYourGuesses();
        
        if (guessesLeft > 0){
            if (yourGuesses == computerGuess){
                wins++;
                document.querySelector('#wins').innerHTML = wins;
                alert("You Win!");
                reset();
            }
        } else if (guessesLeft === 0) {
            losses++;
            document.querySelector("#losses").innerHTML = losses;
            reset();
        }    
         return false;   
    } else {
        alert("Sorry, try again!");
    }
    };


// Pseudo Code - Pyschic game
// Set up page with verbage needed: Wins, Losses, Guesses Left, and Your Guesses (in HTML)
//******JAVASCRIPT ********/
// Need to set up variables for each catagory: Wins, Losses, guessesLeft, and yourGuesses
// If I choose a letter, does it match the computer guess? 
    // Need array of letters "letters"
    // Need a randomly chosen letter "computerGuess"
    // Need onkeyup fuction(event), so that when I press a key, it shows on the screen (yourGuesses)
        //onkeyup is the action syntax that says a button is pressed
        //must add to screen
    // Need letters to "stack" or line up past guesses (up to 9 guesses)
    // After every press of the key, guessesLeft should decrease by 1 (guessesLeft--)
    // *can document.write out answer, to check responses are correct

    // Need if statement to compare computerGuess to yourGuesses
    // If statement should compare 3 scenarios: 
        // If computerGuess is === to yourGuesses; then you Win! 
            //add win (wins++)
            //add alert ("you win!")
                //Wins should increase on screen by +1
                //Game should reset - guessesLeft and yourGuesses
        // If (else) computerGuess is not equal to (!=	not equal) yourGuesses (and within the array); then you lose! 
            
        // (Else If?) statement - need to check how many guesses (if guessesLeft is <= 0, then you lose)
            //add losses (losses++)
            //add alert ("you lose!")
                //Losses should increase on screen by +1
                //Game should reset - guessesLeft and yourGuesses 
            //(else?) statement  - need to check how many guesses (if guessesLeft is >= 0, then keep guessing)
        // If (else) computerGuess does not equal to yourGuesses (outside of array (like backspace or something)), then alert error
            //add alert ("sorry, not an option, keep playing")

            // Need function to reset after 1st and 2nd scenario 
    // guessesLeft should = 9
    // yourGuesses should = none/empty
    // * Wins and Losses score should still show, without refreshing page (should still tally score)
    
//Notes on Functionality
    // reset function doesn't work properly. 
    // Somehow missing the first key stroke? 
    // Not capturing the wins/losses # on screen. 
    // alerts seem out of order? 

