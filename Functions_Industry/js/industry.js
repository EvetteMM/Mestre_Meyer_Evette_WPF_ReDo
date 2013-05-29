<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtmll/DTD/xhtmll-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<body>
<script type="text/javascript">
//Evette Mestre Meyer_5-30-13_Functions_Industry
//Calculate gross pay including overtime
var hrsWorked =Number(prompt("How many hours did you work this week?", ""));
//function needs to calculate how many overtime hours first.  Then multiply reg hourly rate by reg hours and ot hourly rate by ot hours
function calcGrossPay(){
	var hoursWorked;
	var regHours = 30;
	var otHours = (hoursWorked - regHours);
	var regRate = 10;
	var otRate = 15;
	var grossPay = ((regHours * regRate) + (otHours * otRate));
}
calcGrossPay(hrsWorked);

</script>
</body>
</html>