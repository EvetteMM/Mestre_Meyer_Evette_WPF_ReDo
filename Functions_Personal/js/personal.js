<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtmll/DTD/xhtmll-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<body>
<script type="text/javascript">
//Evette Mestre Meyer_5-30-13_Functions_Personal
//School is offering 15% discount on tuition for next year if paid by June 1st.  Temple is offering 20% discount on membership if paid by June 1st.  If I have to pick one, which will save me more money?
var schoolTuition =Number(prompt("How much is school tuition next year?", ""));
var templeMembership =Number(prompt("How much is temple membership next year?", ""));

function calcBetterSavings(schoolTuition, templeMembership){
	var schoolTuition;
	var templeMembership;
	var schoolDiscount = .15;
	var templeDiscount = .20;
	var tuitionSavings = schoolTuition * schoolDiscount;
	var membershipSavings = templeMembership * templeDiscount;
	console.log("The tuition savings for next year is $" + tuitionSavings ". The total temple membership for next year is $" + membershipSavings + ".");
}
calcBetterSavings(schoolTuition, templeMembership);

if (tuitionSavings >= membershipSavings)
{
	document.write("Pay the school by June 1st.");
}
else if (tuitionSavings <= membershipSavings)
{
	document.write("Pay the temple by June 1st");
}

</script>
</body>
</html>