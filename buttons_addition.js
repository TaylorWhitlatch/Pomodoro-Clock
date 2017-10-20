console.log("test")
var workLength = 25;
var playLength = 5;
var alarm = new Audio('http://www.orangefreesounds.com/wp-content/uploads/2016/06/Ringing-clock.mp3?_=1');
var loop = 0;
var clicks = 0;



function addWorkTime(){//to add time to work session
	workLength += 5;
	$('.minutes').text(workLength);
}

function deductWorkTime(){//to deduct session time
	if (workLength > 5){
		workLength -= 5 //logic to prevent going below 5 on time scale.
	}else{
		workLength = 5;
	}
	$('.minutes').text(workLength);
}


function addPlayTime(){
	playLength += 5;
	$("#playTimer").text(playLength);
}

function deductPlayTime(){
	if (playLength > 5){
		playLength -= 5
	}else{
		playLength = 5
	}
	$("#playTimer").text(playLength);
}