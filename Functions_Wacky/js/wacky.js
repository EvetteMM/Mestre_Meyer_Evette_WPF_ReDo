//Evette Mestre Meyer_5-30-13_Functions_Wacky
//Can Amanda get a new iPod?
//Amanda has money from chores and birthday gifts saved up.  An iPod costs $199. Does she have enough yet?
var choreMoney =Number(prompt("How much chore money have you saved up?", ""));
var bdayMoney =Number(prompt("How much birthday money have you saved up?", ""));
//Figure out if money saved is enough to buy an iPod by totaling chore and bday money and comparing to cost of iPod
function calcEnoughSaved(choreMoney, bdayMoney){
	var choreMoney;
	var bdayMoney;
	var totalMoneySaved = choreMoney + bdayMoney;
	var iPodCost = 199;
	var enoughSaved = totalMoneySaved - iPodCost;
	console.log("Amanda has $" + totalMoneySaved + " saved.")
}
var test = calcEnoughSaved(choreMoney, bdayMoney);
console.log(test);
//If money saved is greater than cost of iPod, Amanda has enough
if (enoughSaved >= iPodCost)
{
	document.write("Great job, Amanda - you can buy a new iPod!");
}
//If money saved is less than cost of iPod, she needs to keep saving
else if (enoughSaved <= iPodCost)
{
	document.write("Keep saving, Amanda.  You'll get a new iPod soon.");
}
