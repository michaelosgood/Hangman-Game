//Michael Osgood / Hangman Game 
"use strict"; //all code will execute in strict mode

//Variables for game 
var userGuess;	
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var movieSelection; 
var gameDiv = document.getElementById("games");
var gameOver = false;


//resets game
function resetGame(){
	guessesLeft = 10;
	movieSelection = '';
	startGame();
}

//Generate a random movie for user to guess
function startGame(){
	var movieList = ["missionimpossible","terminator","karatekid","rocky","starwars","avatar"]; //array of movies
	var randomMovie = Math.floor(Math.random() * movieList.length); //used to select a radom movie
	movieSelection = (movieList[randomMovie]); //defines value of movieSelection
	console.log("random movie selected"); //console.log verifies that this function works



	//Generates the number of blank spaces needed if this movie is chosen
	if(movieSelection === "missionimpossible") {
		console.log("mission impossible movie");
		for(var i = 0; i < 17; i++){
			var choiceLtrs = ['Ltr1','Ltr2','Ltr3','Ltr4','Ltr5','Ltr6','Ltr7','Ltr8','Ltr9','Ltr10','Ltr11','Ltr12','Ltr13','Ltr14','Ltr15','Ltr16','Ltr17']
			var createSpan = document.createElement("span"); //creates span in html file
			createSpan.innerHTML = "__ ";
			gameDiv.appendChild(createSpan);
			createSpan.setAttribute("id", choiceLtrs[i]); //provides span w/ id and id name
		}
	}

	//Generates the number of blank spaces needed if this movie is chosen
	if(movieSelection === "terminator") {
		console.log("terminator movie");
		for(var i = 0; i < 10; i++){
			var choiceLtrs = ['Ltr1','Ltr2','Ltr3','Ltr4','Ltr5','Ltr6','Ltr7','Ltr8','Ltr9','Ltr10']
			var createSpan = document.createElement("span"); //creates span in html file
			createSpan.innerHTML = "__ ";
			gameDiv.appendChild(createSpan);
			createSpan.setAttribute("id", choiceLtrs[i]); //provides span w/ id and id name
		}
	}

	//Generates the number of blank spaces needed if this movie is chosen
	if(movieSelection === "karatekid") {
		console.log("karate kid movie");
		for(var i = 0; i < 9; i++){
			var choiceLtrs = ['Ltr1','Ltr2','Ltr3','Ltr4','Ltr5','Ltr6','Ltr7','Ltr8','Ltr9']
			var createSpan = document.createElement("span"); //creates span in html file
			createSpan.innerHTML = "__ ";
			gameDiv.appendChild(createSpan);
			createSpan.setAttribute("id", choiceLtrs[i]); //provides span w/ id and id name
		}
	}

	//Generates the number of blank spaces needed if this movie is chosen
	if(movieSelection === "rocky") {
		console.log("rocky movie");
		for(var i = 0; i < 5; i++){
			var choiceLtrs = ['Ltr1','Ltr2','Ltr3','Ltr4','Ltr5']
			var createSpan = document.createElement("span"); //creates span in html file
			createSpan.innerHTML = "__ ";
			gameDiv.appendChild(createSpan);
			createSpan.setAttribute("id", choiceLtrs[i]); //provides span w/ id and id name
		}
	}

	//Generates the number of blank spaces needed if this movie is chosen
	if(movieSelection === "starwars") {
		console.log("star wars movie");
		for(var i = 0; i < 8; i++){
			var choiceLtrs = ['Ltr1','Ltr2','Ltr3','Ltr4','Ltr5','Ltr6','Ltr7','Ltr8']
			var createSpan = document.createElement("span"); //creates span in html file
			createSpan.innerHTML = "__ ";
			gameDiv.appendChild(createSpan);
			createSpan.setAttribute("id", choiceLtrs[i]); //provides span w/ id and id name
		}
	}

	///Generates the number of blank spaces needed if this movie is chosen
	if(movieSelection === "avatar") {
		console.log("avatar movie");
		for(var i = 0; i < 6; i++){
			var choiceLtrs = ['Ltr1','Ltr2','Ltr3','Ltr4','Ltr5','Ltr6']
			var createSpan = document.createElement("span"); //creates span in html file
			createSpan.innerHTML = "__ ";
			gameDiv.appendChild(createSpan);
			createSpan.setAttribute("id", choiceLtrs[i]); //provides span w/ id and id name
		}
	}
	document.getElementById("choices").innerHTML = "Choices: 10";
}



//THIS IS THE BEGINNING OF THE MISSION IMPOSSIBLE SECTION
//this will also lowercase their choices whenever they press a key
document.onkeypress = function(event){
	userGuess = event.key.toLowerCase();

	//This is the rules for the mission impossible movie
	if(movieSelection === "missionimpossible") {
		
		//wrong answers for this puzzle are listed below
		var wrongAnswers = ['a','c','d','f','g','h','j','k','q','r','t','u','v','w','x','y','z'];
		
		//right answers for this puzzle are listed below
		//letters appear on page when answer is guessed correctly
		if(userGuess === 'm'){
			document.getElementById('Ltr1').innerHTML = 'm';
			document.getElementById('Ltr9').innerHTML = 'm';
		}

		if(userGuess === 'i'){
			document.getElementById('Ltr2').innerHTML = 'i';
			document.getElementById('Ltr5').innerHTML = 'i';
			document.getElementById('Ltr8').innerHTML = 'i';
			document.getElementById('Ltr14').innerHTML = 'i';
		}

		if(userGuess === 's'){
			document.getElementById('Ltr3').innerHTML = 's';
			document.getElementById('Ltr4').innerHTML = 's';
			document.getElementById('Ltr12').innerHTML = 's';
			document.getElementById('Ltr13').innerHTML = 's';
		}

		if(userGuess === 'o'){
			document.getElementById('Ltr6').innerHTML = 'o';
			document.getElementById('Ltr11').innerHTML = 'o';
		}
		if(userGuess === 'n'){
			document.getElementById('Ltr7').innerHTML = 'n';
		}

		if(userGuess === 'p'){
			document.getElementById('Ltr10').innerHTML = 'p';
		}

		if(userGuess === 'b'){
			document.getElementById('Ltr15').innerHTML = 'b';
		}

		if(userGuess === 'l'){
			document.getElementById('Ltr16').innerHTML = 'l';
		}

		if(userGuess === 'e'){
			document.getElementById('Ltr17').innerHTML = 'e';
		}

		//if all answers are guessed correcty, this function is executed
		if((document.getElementById('Ltr1').innerHTML === 'm') &&
		   (document.getElementById('Ltr2').innerHTML === 'i') &&
		   (document.getElementById('Ltr3').innerHTML === 's') &&
		   (document.getElementById('Ltr6').innerHTML === 'o') &&
		   (document.getElementById('Ltr7').innerHTML === 'n') &&
		   (document.getElementById('Ltr10').innerHTML === 'p') &&
		   (document.getElementById('Ltr15').innerHTML === 'b') &&
		   (document.getElementById('Ltr16').innerHTML === 'l') &&
		   (document.getElementById('Ltr17').innerHTML === 'e')){
		   document.getElementById('instructions').innerHTML = "You Have Won!"; //changes instructions to 'you have won'
		   wins++;
		   console.log('user wins');
		   document.getElementById('wins').innerHTML = "Wins: " + wins; //adds a win and displays it on the page 
		   
		}

		//Used to countdown the choices that are remaining
		for(var i = 0; i < wrongAnswers.length; i++){
			if(userGuess === wrongAnswers[i]){
				guessesLeft--; //the guesses will subtract by 1 
				document.getElementById('choices').innerHTML = "Choices: " + guessesLeft; //displays the number of choices remaining
				console.log('deduct a choice'); //logs that a choice has been deducted
				var para = document.createElement('span'); //creates a span
				var node = document.createTextNode(userGuess + ' '); 
				para.appendChild(node);
				var element = document.getElementById('usedLetters');
				element.appendChild(para);
			}
			else if(guessesLeft === 0){
				document.getElementById('instructions').innerHTML = "You Have Lost!";
				losses++;
				console.log('user lost');
				document.getElementById('losses').innerHTML = "Losses: " + losses;
			}
			
			if (gameOver === true);{
				resetGame();
			}

				//Need to work on this section still
				//need to add 1 to losses section so it can update on the site

			}
		}
	

	//THIS IS THE BEGINNING OF THE TERMINATOR SECTION
	//This is the rules for the terminator movie
	if(movieSelection === "terminator") {
		
		//wrong answers for this puzzle are listed below
		var wrongAnswers = ['b','c','d','f','g','h','j','k','l','p','q','s','u','v','w','x','y','z'];
		
		//right answers for this puzzle are listed below
		//letters appear on page when answer is guessed correctly
		if(userGuess === 't'){
			document.getElementById('Ltr1').innerHTML = 't';
			document.getElementById('Ltr8').innerHTML = 't';
		}

		if(userGuess === 'e'){
			document.getElementById('Ltr2').innerHTML = 'e';
		}

		if(userGuess === 'r'){
			document.getElementById('Ltr3').innerHTML = 'r';
			document.getElementById('Ltr10').innerHTML = 'r';
		}

		if(userGuess === 'm'){
			document.getElementById('Ltr4').innerHTML = 'm';
		}
		if(userGuess === 'i'){
			document.getElementById('Ltr5').innerHTML = 'i';
		}

		if(userGuess === 'n'){
			document.getElementById('Ltr6').innerHTML = 'n';
		}

		if(userGuess === 'a'){
			document.getElementById('Ltr7').innerHTML = 'a';
		}

		if(userGuess === 'o'){
			document.getElementById('Ltr9').innerHTML = 'o';
		}


		//if all answers are guessed correcty, this function is executed
		if((document.getElementById('Ltr1').innerHTML === 't') &&
		   (document.getElementById('Ltr2').innerHTML === 'e') &&
		   (document.getElementById('Ltr3').innerHTML === 'r') &&
		   (document.getElementById('Ltr4').innerHTML === 'm') &&
		   (document.getElementById('Ltr5').innerHTML === 'i') &&
		   (document.getElementById('Ltr6').innerHTML === 'n') &&
		   (document.getElementById('Ltr7').innerHTML === 'a') &&
		   (document.getElementById('Ltr9').innerHTML === 'o')){
		   document.getElementById('instructions').innerHTML = "You Have Won!"; //changes instructions to 'you have won'
		   wins++;
		   console.log('user wins');
		   document.getElementById('wins').innerHTML = "Wins: " + wins; //adds a win and displays it on the page 
		   
		}

		//Used to countdown the choices that are remaining
		for(var i = 0; i < wrongAnswers.length; i++){
			if(userGuess === wrongAnswers[i]){
				guessesLeft--; //the guesses will subtract by 1 
				document.getElementById('choices').innerHTML = "Choices: " + guessesLeft; //displays the number of choices remaining
				console.log('deduct a choice'); //logs that a choice has been deducted
				var para = document.createElement('span'); //creates a span
				var node = document.createTextNode(userGuess + ' '); 
				para.appendChild(node);
				var element = document.getElementById('usedLetters');
				element.appendChild(para);
			}
			else if(guessesLeft === 0){
				document.getElementById('instructions').innerHTML = "You Have Lost!";
				losses++;
				if(losses === 1){}//Need to work on this section still
				//need to add 1 to losses section so it can update on the site
			}
		}
	}

	//THIS IS THE BEGINNING OF THE KARATE KID SECTION
	//This is the rules for the Karate Kid movie
	if(movieSelection === "karatekid") {
		
		//wrong answers for this puzzle are listed below
		var wrongAnswers = ['b','c','f','g','h','j','l','m','n','o','p','q','s','u','v','w','x','y','z'];
		
		//right answers for this puzzle are listed below
		//letters appear on page when answer is guessed correctly
		if(userGuess === 'k'){
			document.getElementById('Ltr1').innerHTML = 'k';
			document.getElementById('Ltr7').innerHTML = 'k';
		}

		if(userGuess === 'a'){
			document.getElementById('Ltr2').innerHTML = 'a';
			document.getElementById('Ltr4').innerHTML = 'a';
		}

		if(userGuess === 'r'){
			document.getElementById('Ltr3').innerHTML = 'r';
		}

		if(userGuess === 't'){
			document.getElementById('Ltr5').innerHTML = 't';
		}
		if(userGuess === 'e'){
			document.getElementById('Ltr6').innerHTML = 'e';
		}

		if(userGuess === 'i'){
			document.getElementById('Ltr8').innerHTML = 'i';
		}

		if(userGuess === 'd'){
			document.getElementById('Ltr9').innerHTML = 'd';
		}



		//if all answers are guessed correcty, this function is executed
		if((document.getElementById('Ltr1').innerHTML === 'k') &&
		   (document.getElementById('Ltr2').innerHTML === 'a') &&
		   (document.getElementById('Ltr3').innerHTML === 'r') &&
		   (document.getElementById('Ltr5').innerHTML === 't') &&
		   (document.getElementById('Ltr6').innerHTML === 'e') &&
		   (document.getElementById('Ltr8').innerHTML === 'i') &&
		   (document.getElementById('Ltr9').innerHTML === 'd')){
		   document.getElementById('instructions').innerHTML = "You Have Won!"; //changes instructions to 'you have won'
		   wins++;
		   console.log('user wins');
		   document.getElementById('wins').innerHTML = "Wins: " + wins; //adds a win and displays it on the page 
		   
		}

		//Used to countdown the choices that are remaining
		for(var i = 0; i < wrongAnswers.length; i++){
			if(userGuess === wrongAnswers[i]){
				guessesLeft--; //the guesses will subtract by 1 
				document.getElementById('choices').innerHTML = "Choices: " + guessesLeft; //displays the number of choices remaining
				console.log('deduct a choice'); //logs that a choice has been deducted
				var para = document.createElement('span'); //creates a span
				var node = document.createTextNode(userGuess + ' '); 
				para.appendChild(node);
				var element = document.getElementById('usedLetters');
				element.appendChild(para);
			}
			else if(guessesLeft === 0){
				document.getElementById('instructions').innerHTML = "You Have Lost!";
				losses++;
				if(losses === 1){}//Need to work on this section still
				//need to add 1 to losses section so it can update on the site
			}
		}
	}
	
	//THIS IS THE BEGINNING OF THE ROCKY SECTION
	//This is the rules for the Rocky movie
	if(movieSelection === "rocky") {
		
		//wrong answers for this puzzle are listed below
		var wrongAnswers = ['a','b','d','e','f','g','h','i','j','l','m','n','p','q','s','t','u','v','w','x','y','z'];
		
		//right answers for this puzzle are listed below
		//letters appear on page when answer is guessed correctly
		if(userGuess === 'r'){
			document.getElementById('Ltr1').innerHTML = 'r';
		}

		if(userGuess === 'o'){
			document.getElementById('Ltr2').innerHTML = 'o';
		}

		if(userGuess === 'c'){
			document.getElementById('Ltr3').innerHTML = 'c';
		}

		if(userGuess === 'k'){
			document.getElementById('Ltr4').innerHTML = 'k';
		}
		if(userGuess === 'y'){
			document.getElementById('Ltr5').innerHTML = 'y';
		}


		//if all answers are guessed correcty, this function is executed
		if((document.getElementById('Ltr1').innerHTML === 'r') &&
		   (document.getElementById('Ltr2').innerHTML === 'o') &&
		   (document.getElementById('Ltr3').innerHTML === 'c') &&
		   (document.getElementById('Ltr4').innerHTML === 'k') &&
		   (document.getElementById('Ltr5').innerHTML === 'y')){
		   document.getElementById('instructions').innerHTML = "You Have Won!"; //changes instructions to 'you have won'
		   wins++;
		   console.log('user wins');
		   document.getElementById('wins').innerHTML = "Wins: " + wins; //adds a win and displays it on the page 
		   
		}

		//Used to countdown the choices that are remaining
		for(var i = 0; i < wrongAnswers.length; i++){
			if(userGuess === wrongAnswers[i]){
				guessesLeft--; //the guesses will subtract by 1 
				document.getElementById('choices').innerHTML = "Choices: " + guessesLeft; //displays the number of choices remaining
				console.log('deduct a choice'); //logs that a choice has been deducted
				var para = document.createElement('span'); //creates a span
				var node = document.createTextNode(userGuess + ' '); 
				para.appendChild(node);
				var element = document.getElementById('usedLetters');
				element.appendChild(para);
			}
			else if(guessesLeft === 0){
				document.getElementById('instructions').innerHTML = "You Have Lost!";
				losses++;
				if(losses === 1){}//Need to work on this section still
				//need to add 1 to losses section so it can update on the site
			}
		}
	}

	//THIS IS THE BEGINNING OF THE STAR WARS SECTION
	//This is the rules for the Star Wars movie
	if(movieSelection === "starwars") {
		
		//wrong answers for this puzzle are listed below
		var wrongAnswers = ['b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','u','v','x','y','z'];
		
		//right answers for this puzzle are listed below
		//letters appear on page when answer is guessed correctly
		if(userGuess === 's'){
			document.getElementById('Ltr1').innerHTML = 's';
			document.getElementById('Ltr8').innerHTML = 's';
		}

		if(userGuess === 't'){
			document.getElementById('Ltr2').innerHTML = 't';
		}

		if(userGuess === 'a'){
			document.getElementById('Ltr3').innerHTML = 'a';
			document.getElementById('Ltr6').innerHTML = 'a';
		}

		if(userGuess === 'r'){
			document.getElementById('Ltr4').innerHTML = 'r';
			document.getElementById('Ltr7').innerHTML = 'r';
		}
		if(userGuess === 'w'){
			document.getElementById('Ltr5').innerHTML = 'w';
		}

		//if all answers are guessed correcty, this function is executed
		if((document.getElementById('Ltr1').innerHTML === 's') &&
		   (document.getElementById('Ltr2').innerHTML === 't') &&
		   (document.getElementById('Ltr3').innerHTML === 'a') &&
		   (document.getElementById('Ltr4').innerHTML === 'r') &&
		   (document.getElementById('Ltr5').innerHTML === 'w')){
		   document.getElementById('instructions').innerHTML = "You Have Won!"; //changes instructions to 'you have won'
		   wins++;
		   console.log('user wins');
		   document.getElementById('wins').innerHTML = "Wins: " + wins; //adds a win and displays it on the page 
		   
		}

		//Used to countdown the choices that are remaining
		for(var i = 0; i < wrongAnswers.length; i++){
			if(userGuess === wrongAnswers[i]){
				guessesLeft--; //the guesses will subtract by 1 
				document.getElementById('choices').innerHTML = "Choices: " + guessesLeft; //displays the number of choices remaining
				console.log('deduct a choice'); //logs that a choice has been deducted
				var para = document.createElement('span'); //creates a span
				var node = document.createTextNode(userGuess + ' '); 
				para.appendChild(node);
				var element = document.getElementById('usedLetters');
				element.appendChild(para);
			}
			else if(guessesLeft === 0){
				document.getElementById('instructions').innerHTML = "You Have Lost!";
				losses++;
				if(losses === 1){}//Need to work on this section still
				//need to add 1 to losses section so it can update on the site
			}
		}
	}

//////////////////
//THIS IS THE BEGINNING OF THE AVATAR SECTION
	//This is the rules for the Avatar movie
	if(movieSelection === "avatar") {
		
		//wrong answers for this puzzle are listed below
		var wrongAnswers = ['b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','s','u','w','x','y','z'];
		
		//right answers for this puzzle are listed below
		//letters appear on page when answer is guessed correctly
		if(userGuess === 'a'){
			document.getElementById('Ltr1').innerHTML = 'a';
			document.getElementById('Ltr3').innerHTML = 'a';
			document.getElementById('Ltr5').innerHTML = 'a';
		}

		if(userGuess === 'v'){
			document.getElementById('Ltr2').innerHTML = 'v';
		}

		if(userGuess === 't'){
			document.getElementById('Ltr4').innerHTML = 't';
		}

		if(userGuess === 'r'){
			document.getElementById('Ltr6').innerHTML = 'r';
		}

		//if all answers are guessed correcty, this function is executed
		if((document.getElementById('Ltr1').innerHTML === 'a') &&
		   (document.getElementById('Ltr2').innerHTML === 'v') &&
		   (document.getElementById('Ltr4').innerHTML === 't') &&
		   (document.getElementById('Ltr6').innerHTML === 'r')){
		   document.getElementById('instructions').innerHTML = "You Have Won!"; //changes instructions to 'you have won'
		   wins++;
		   console.log('user wins');
		   document.getElementById('wins').innerHTML = "Wins: " + wins; //adds a win and displays it on the page 
		   
		}

		//Used to countdown the choices that are remaining
		for(var i = 0; i < wrongAnswers.length; i++){
			if(userGuess === wrongAnswers[i]){
				guessesLeft--; //the guesses will subtract by 1 
				document.getElementById('choices').innerHTML = "Choices: " + guessesLeft; //displays the number of choices remaining
				console.log('deduct a choice'); //logs that a choice has been deducted
				var para = document.createElement('span'); //creates a span
				var node = document.createTextNode(userGuess + ' '); 
				para.appendChild(node);
				var element = document.getElementById('usedLetters');
				element.appendChild(para);
			}
			else if(guessesLeft === 0){
				document.getElementById('instructions').innerHTML = "You Have Lost!";
				losses++;
				if(losses === 1){}//Need to work on this section still
				//need to add 1 to losses section so it can update on the site
			}
		}
	}

}


