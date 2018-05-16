const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");
var timer = [0,0,0,0];
var min = 0;
var hr = 0;

// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(time){
	if(time<=9)
		time = '0'+time;
	return time;
}

// Run a standard minute/second/hundredths timer:
function runTimer(){
	timer[3]++;
	timer[0] = Math.floor((timer[3]/100)/60);
	timer[1] = Math.floor((timer[3]/100))%60;
	timer[2] = timer[3]%100;

	var timeStr = leadingZero(timer[0])+":"+leadingZero(timer[1])+":"+leadingZero(timer[2]);
	theTimer.innerHTML = timeStr;
}

// Match the text entered with the provided text on the page:
function matchStr(){
	var enteredText=testArea.value;
	var originTextMatch = originText.substring(0,enteredText.length);

	if(enteredText===originText)
	{
		testWrapper.style.borderColor = "green";
		clearInterval(timerVar);
	}
	else{
		if(enteredText==originTextMatch)
			testWrapper.style.borderColor = "#65CCf3";
		else
			testWrapper.style.borderColor = "#E95D0F";	
	}

}

// Start the timer:
var timerVar;
var first = true;
function startTimer(){

	console.log("yo");

	if(first){
		timerVar = setInterval(runTimer,10);
		first=false;
	}
}

// Reset everything:
function resetAll(){
	clearInterval(timerVar);
	timerVar = null;
	theTimer.innerHTML = "00:00:00";
	testArea.value = "";
	first = true;
	timer = [0,0,0,0];
	testWrapper.style.borderColor = "grey";
}

// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress", startTimer,false);
testArea.addEventListener("keyup", matchStr,false);
resetButton.addEventListener("click", resetAll,false)