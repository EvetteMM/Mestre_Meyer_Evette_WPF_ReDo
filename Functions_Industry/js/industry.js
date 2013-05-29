//Evette Mestre Meyer_5-30-13_Functions_Industry
//Calculate gross pay including overtime
var hrsWorked =Number(prompt("How many hours did you work this week?", ""));
//function needs to calculate how many overtime hours first.  Then multiply reg hourly rate by reg hours and ot hourly rate by ot hours
function calcGrossPay(hrsWorked){
	var regHours = 30;
	var otHours = (hoursWorked - regHours);
	var regRate = 10;
	var otRate = 15;
	var grossPay = ((regHours * regRate) + (otHours * otRate));
	console.log("Your regular salary and overtime pay total $" + grossPay);
}
calcGrossPay(hrsWorked);

