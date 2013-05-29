<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtmll/DTD/xhtmll-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<body>
<script type="text/javascript">
//Evette Mestre Meyer_5-30-13_Functions Worksheet_Circumference
//Calculate the circumference of a circle
var radius = (prompt("What is the radius of your circle?", ""));
var piTwo = 3.14 * 2;
 
function calcCircum(radius, piTwo){
	var circum = radius * piTwo;
	return circum;
}

var totalCircum = calcCircum(radius, piTwo);
console.log(totalCircum);

</script>
</body>
</html>