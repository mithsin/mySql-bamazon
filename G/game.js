//grab prompt input
//match prompt input to current random word alphabet
//if match, display on screen
//else if does not match, take one life
var guessArray=[];
var gameStart = function(){
    if(/*life > 0 && word not complete -> continue*/){
inquirer.prompt([
    {
        name: "Guess",
        message: "what is your guess?"
    }
]).then(function(userGuess){
    var newWord = new wrod(
        userGuess.name
        );
    guessArray.push(newWord);
    
    });
};/* else if(life <= 0){

    } else {

    }*/
//word bank for word to choose from
//random function to choose the word randomly
//make each alphabet and sing array
//hide the random word
var word = {
    wordBank: ["Awkward", "apple", "juice", "talk", "todayistheday", "whereismydog"],
    guessLeft: 10;  
};

//make reset, game over, restart input, 
var game = {

};