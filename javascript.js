// number 1: add two variables
function addingUp(x,y){
 var z=(x+y);
 return z;
}

// number 1: add two strings
function addingString(word1,word2){
	var f= (word1+" "+word2);
	return f;
}

// number 2
var flyers=["Giroux","Voracek","Simmonds","Schenn","Couterier"];
var sixers=["Simmons","Embiid","Saric","Okafor"];
var phillyAthletes=[flyers,sixers];
console.log(phillyAthletes[0][1]);
console.log(phillyAthletes[1][3]);

// number 3 and 4
var promptnum = prompt("What is your number?")

	if(promptnum>100){   
		alert(promptnum + " is greater than 100"); 
	} else{
		alert("Your value is less than 100");
	}

// number 5


// number 6
function myRepeat(pickname){
	console.log("you have entered: "+pickname);
}

// number 7
function noArg(){
	console.log("There are no arguments in this function");
}

// number 8
function ifElseExample(door){
	if(door==1){   
		alert("Door #1 contains a new car"); 
	}else if(door==2){   
		alert("Door #2 is a trip to Europe"); 
	} else{
		alert("Door #3 is a night out in the city");
	}
}
