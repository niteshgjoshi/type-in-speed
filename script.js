const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");
var sec = 0;
var min = 0;
var hr = 0;

// Add leading zero to numbers 9 or below (purely for aesthetics):


// Run a standard minute/second/hundredths timer:
var runTimer;
var first = true;
function startTimer(){

	console.log("yo");

	if(first){
		runTimer = setInterval(unanmed,1000);
		first=false;
	}
}

function unanmed(){
	sec = sec + 1;
	if(sec==60)
	{
		sec=0;
		min = min + 1;
	}
	if(min==60)
	{
		min=0;
		hr = hr + 1;
	}
	theTimer.innerHTML = hr+":"+min+":"+sec;
}
// Match the text entered with the provided text on the page:


// Start the timer:


// Reset everything:
function resetAll(){
	clearInterval(runTimer);
	theTimer.innerHTML = "00:00:00";
	testArea.innerHTML = "The clock starts Farting";
}

// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress", startTimer,false);
resetButton.addEventListener("click", resetAll,false)