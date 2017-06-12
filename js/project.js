

window.onload = function(){ 

var inputF;


function calculateC() {
	inputF = document.getElementById("inputFtoC").value;
	var outputFtoC = (inputF - 32) * (5/9);
	document.getElementById("solutionFtoC").innerHTML = outputFtoC.toFixed(2);
 };

 
document.getElementById("convertFtoC").onclick = calculateC;

var inputC;

function calculateF() {
	inputC = document.getElementById("inputCtoF").value;
	var outputCtoF = (inputC * 9/5) +32;
	document.getElementById("solutionCtoF").innerHTML = outputCtoF.toFixed(2);
 }

document.getElementById("convertCtoF").onclick = calculateF;

};