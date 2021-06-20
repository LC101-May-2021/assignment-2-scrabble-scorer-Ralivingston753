// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");
let word = "";
let newPointStructure ={};

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer() {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }


function scrabbleScorer() {
	word = word.toUpperCase();
	let letterPoints = 0;
 
	for (let i = 0; i < word.length; i++) {
			//letterPoints += `Points for '${word[i]}': ${newPointStructure//[word[i]]}\n`
      letterPoints+= Number(newPointStructure[word[i]]);
      
		 }
 	return letterPoints;
}

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
    word = input.question("Let's play some scrabble! Enter a word: ");
};

let simpleScorer = {
  1: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']};

function simpleScore(){
  word = word.toUpperCase();
	let letterPoints = 0;
 
	  for (const pointValue in simpleScorer) {
			letterPoints += Number(word.length)
	  }
	
	return letterPoints;
 }


let vowelBonus = ['A','E','I','O','U'];

function vowelBonusScore(){
  word = word.toUpperCase();
	let letterPoints = Number(0);
 
	for (let i = 0; i < word.length; i++) {
		 if (vowelBonus.includes(word[i])) {
			    letterPoints += 3
       }else{
         letterPoints += 1
       }
		 }
	return Number(letterPoints);
 }

let scrabbleScore;

const scoringAlgorithms = [
 simple = {
   name: 'Simple Score',
   description: ' Each letter is worth 1 point.',
   scoringFunction: simpleScore
   }, 
 bonus = {
     name: 'Bonus Vowel',
     description: ' Vowels are 3 pts, consonants are 1 pt.',
    scoringFunction: vowelBonusScore
  },
  scrabble = {
     name: "Scrabble:",
     description:' The traditional scoring algorithm.',
     scoringFunction: scrabbleScorer
  }

];


function scorerPrompt(word) {
  let num = input.question (`Which scoring algorithm would you like to use?\n
0 - Simple: One point per character
1 - Vowel Bonus: Vowels are worth 3 points 
2 - Scrabble: Uses scrabble point system
Enter 0, 1, or 2:`)

console.log(`algorithm name: ${scoringAlgorithms[num].name}\n`);
console.log(`Score for '${word}': ${scoringAlgorithms[num].scoringFunction(word)}`);
};

function transform(oldPointStructure) {

  for (const j in oldPointStructure){
    for (const k in oldPointStructure[j]) {
      newPointStructure[oldPointStructure[j][k]] = j; 
    } 
    
  }
  console.log(newPointStructure);
};



function runProgram() {
  transform(oldPointStructure);
   initialPrompt();
   scorerPrompt(word);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

