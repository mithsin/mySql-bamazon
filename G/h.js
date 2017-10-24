var inquirer = require("inquirer");
var prompt = require("prompt");

var arrayWord = ["Awkward", "apple", "juice", "talk", "todayistheday", "whereismydog"];
var randomWord = arrayWord[Math.floor(Math.random()*arrayWord.length)];
var alphabet = ("abcdefghijglmnopqrstuvwxyz").split('');
var wordHide = randomWord.replace(/\w/g, "_");





var lives = 5;
var guessedAlp = [];
var wrongAlp =[];

