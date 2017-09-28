/*-----------begin-----------------*/
$(document).ready(function(){    
    $('#mid').hide();
    $('#end').hide();
    clearInterval(intervalId);
    var number = 1000;
    var intervalId;

$("#str_btn").on("click", function(){
        
		$("#start").hide();
		$("#mid").show();
        intervalId = setInterval(countItDown, 1000);
	    });
/*-------------Timmer----------------*/

        
        

function countItDown(){
    number--;
        if(number === -1){
        clearInterval(intervalId);
        $('#start').hide();
        $('#mid').hide();
        $('#end').show();
            loopAns();
        }
    $('#countDown').html('<h2>' + number + '</h2>'); 
    }
countItDown();
        
/*------------Q and R----------------*/    
var correctAns = [];    
function start(){
 showQuestions();
 }
var myQuestions = [
    {
    question: "what is 1+1",
    answers: {a:'1',b:'2',c:'3',d:'4'},
    correctAnswer: '2'
    },
    {
    question: "what is 2+2",
    answers: {a:'1',b:'2',c:'3',d:'4'},
    correctAnswer: '4'
    },
    {
    question: "what is 4+4",
    answers: {a:'8', b:'2',c:'3',d:'6'},
    correctAnswer: '8'
    },
    {
    question: "what is 8+8",
    answers: {a:'8', b:'2',c:'16',d:'4'},
    correctAnswer: '16'
    },{
    question: "what is 1+1",
     answers: {a:'1',b:'2',c:'3',d:'1'},
    correctAnswer: '2'
    },
    {
    question: "what is 2+9",
    answers: {a:'1',b:'2',c:'11',d:'7'},
    correctAnswer: '11'
    },
    {
    question: "what is 12+4",
    answers: {a:'8', b:'2',c:'3',d:'16'},
    correctAnswer: '16'
    },
    {
    question: "what is 8+8",
    answers: {a:'8', b:'2',c:'16',d:'23'},
    correctAnswer: '16'
    },
    {
    question: "what is 8+24",
    answers: {a:'8', b:'2',c:'32',d:'16'},
    correctAnswer: '32'
    },
    {
    question: "what is 51+1",
    answers: {a:'1',b:'52',c:'3',d:'4'},
    correctAnswer: '52'
    }

];
function showQuestions(){
	var ques = [];
    var quiz = [];
    var ans;
    var show = [];
    var call = [];
 for (var i=0; i<myQuestions.length; i++){
 	var quiz =[];
 	for (var alp in myQuestions[i].answers){
      		quiz.push('<input type="radio" name="question'+i+'" value="'+myQuestions[i].answers[alp]+'" >'+'<label>'+ alp + ':' + 
      		myQuestions[i].answers[alp]+'</label>');
    	}
    ques = myQuestions[i].question;
     show.push('<div class="myQ" >'+'<span>'+'<h3>'+ques+'</h3>'+ '</span>'+'<br>' + '<span>' + quiz + '</span>' + '</div>');
    }

$("#questions").html(show);
}
   showQuestions();

function loopAns(){
    var userGuess = '';
    var corrects = 0;
    var wrong = 0;
    var blank = 0;
    
    for (var i=0; i < myQuestions.length; i++){
     correctAns = myQuestions[i].correctAnswer;
     userGuess = $('input[name="question'+i+'"]:checked').val();
        if(userGuess == correctAns){
            corrects++;
        } else if(userGuess == undefined){
            blank++;
        } else {
            wrong++;
        }
    }
    clearInterval(intervalId);
     var allResult = '<div>'+'Total Corrects :' + '<span class="rSult">' + corrects + '</span>' + '</div>'+'<br>' +
'<div>'+'Total Wrongs :' + '<span class="rSult">' + wrong + '</span>' + '</div>'+'<br>' +
'<div>'+'Questions did not answer :' + '<span class="rSult">' + blank + '</span>' + '</div>'+'<br>' +
'<div>'+'Total Questions :' + '<span class="rSult">' + myQuestions.length + '</span>' + '</div>';
    $('#results').html(allResult);
}    
    
$('#submit').on('click',function showAns(){
    $('#start').hide();
    $('#mid').hide();
    $('#end').show();
    loopAns();
 })
    
     });//document ready function   
