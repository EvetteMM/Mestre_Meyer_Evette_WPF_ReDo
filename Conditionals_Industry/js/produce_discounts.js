<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtmll/DTD/xhtmll-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<body>
<script type="text/javascript">

//Evette Mestre Meyer_5-23-13_Conditionals_Industry - Produce Discounts
//Greenacre Farms is offering a 10% Discount on orders over 50 pounds OR over $250
//Ppp is shorthands for price per pound

var lbsLettuce = Number(prompt("How many pounds of lettuce would you like today?"), "");
var lettucePpp;
lettucePpp = .50;
var lettuceTotal;
lettuceTotal = lbsLettuce * lettucePpp;

var lbsTomatoes = Number(prompt("How many pounds of tomatoes would you like today?"), "");
var tomatoesPpp;
tomatoesPpp = .50;
var tomatoesTotal;
tomatoesTotal = lbsTomatoes * tomatoesPpp;

var lbsCukes = Number(prompt("How many pounds of cucumbers would you like today?"), "");
var cukesPpp;
cukesPpp = .50;
var cukesTotal;
cukesTotal = lbsCukes * cukePpp;

var totalPoundsOrdered;
totalPoundsOrdered = lbsLettuce + lbsTomatoes;

var orderTotal;
orderTotal = lettuceTotal + tomatoesTotal;

if ((totalPoundsOrdered >= 50) || (orderTotal >= 250))
{
	document.write("You receive a 10% Discount today!  Thank you for your order.");
}

</script>
</body>
</html>