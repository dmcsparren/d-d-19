
function advanced(numSides, numRolls, modifier) {
	var total = 0;
	var result = "";
	var numSides = prompt("How many sided die?");
	var numRolls = prompt("How many rolls?");
	var modifier = prompt("Enter modifier (enter 0 if none)");
	for (var loop=0; loop < numRolls; loop++) {
		roll = Math.floor((Math.random()*numSides)+1);
		modroll = roll + parseInt(modifier);
		result += " [ Roll "+(loop+1)+": " +roll+" + "+modifier+" = "+modroll+ " ] ";
		total += roll;
}
	document.getElementById("rolls").innerHTML = result;
	total += parseInt(modifier);
	document.getElementById("advroll").innerHTML = "Total: "+total;
}

function rolld4() {
document.getElementById("four").innerHTML =
Math.floor((Math.random() * 4)+1);
}
function rolld6() {
document.getElementById("six").innerHTML =
Math.floor((Math.random() * 6)+1);
}
function rolld8() {
document.getElementById("eight").innerHTML =
Math.floor((Math.random() * 8)+1);
}
function rolld10() {
document.getElementById("ten").innerHTML =
Math.floor((Math.random() * 10)+1);
}
function rolld12() {
document.getElementById("twelve").innerHTML =
Math.floor((Math.random() * 12)+1);
}
function rolld20() {
document.getElementById("twenty").innerHTML =
Math.floor((Math.random() * 20)+1);
}
