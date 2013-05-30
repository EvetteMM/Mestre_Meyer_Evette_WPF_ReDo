//Evette Mestre Meyer_5-30-13_Functions_Worksheet_Circumference
//calculate the circumferene of a circle
var radius =Number(prompt("What is the radius of the circle?", ""));
function calcCircumference(radius){
	var pi = 3.14;
	var doubleRadius = 2;
	var circumference = (pi * radius * doubleRadius);
	document.write(circumference);
}
calcCircumference(radius);
