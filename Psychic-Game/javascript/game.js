   var alpoo = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
    var win = 0;
    var tryLeft = 10;
    var wrong = [];
    var loss = 0;
    var randomAlp = alpoo[Math.floor(Math.random()*alpoo.length)];

function reset(){
    tryLeft = 10;
    wrong = [];
    randomAlp = alpoo[Math.floor(Math.random()*alpoo.length)];
    document.getElementById("guesses").innerHTML = tryLeft;
    document.getElementById("wrong").innerHTML = wrong;
    document.getElementById("hint").innerHTML = randomAlp;
}

document.onkeyup = function(event){
var userGuess = event.key;
    if(alpoo.indexOf(userGuess) > -1){
        var userGuessSpan = document.getElementById("guess").innerHTML = userGuess;

if (randomAlp === userGuess){
        win++;
        var youWin = document.getElementById("win").innerHTML = win;
        alert("you are GOD like");
       reset();
    } else if (randomAlp !== userGuess){
        tryLeft--;
        var tryleftDiv = document.getElementById("guesses").innerHTML = tryLeft;
            if (tryLeft === 0){
            loss++;
            var youloss = document.getElementById("losses").innerHTML = loss;
                alert("haHaHA is that all you got?")
                   reset();
                }  
        wrong.push(userGuess);
        var wrongBank = document.getElementById("wrong").innerHTML = wrong;
        };/* !== userGuess*/
 
    }; //begin alpoo keyUp
}; //begin keyup function
    
    document.getElementById("win").innerHTML = win;
    document.getElementById("guesses").innerHTML = tryLeft;
    document.getElementById("losses").innerHTML = loss;
    var yourHint = document.getElementById("hint").innerHTML = randomAlp;