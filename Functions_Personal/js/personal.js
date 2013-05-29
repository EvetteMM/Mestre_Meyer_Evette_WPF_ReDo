//Evette Mestre Meyer_5-30-13_Functions_Personal
//School is offering 15% discount on tuition for next year if paid by June 1st.  Temple is offering 20% discount on membership if paid by June 1st.  If I have to pick one, which will save me more money?
//Get tuition and membership costs first
var schoolTuition =Number(prompt("How much is school tuition next year?", ""));
var templeMembership =Number(prompt("How much is temple membership next year?", ""));
//calculate discounts for each to get total savings
function calcBetterSavings(schoolTuition, templeMembership){
	var templeMembership;
	var schoolDiscount = .15;
	var templeDiscount = .20;
	var tuitionSavings = schoolTuition * schoolDiscount;
	var membershipSavings = templeMembership * templeDiscount;
	//compare savings for each
	console.log("The tuition savings for next year is $" + tuitionSavings ". The total temple membership for next year is $" + membershipSavings + ".");
	return membershipSavings;
}
var test = calcBetterSavings(schoolTuition,templeMembership);
//make decision about which to pay
if (tuitionSavings >= membershipSavings)
{
	console.log("Pay the school by June 1st.");
}
else if (tuitionSavings <= membershipSavings)
{
	console.log("Pay the temple by June 1st");
}
