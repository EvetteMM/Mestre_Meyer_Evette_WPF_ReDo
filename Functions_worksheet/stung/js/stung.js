//Evette Mestre Meyer_5-30-13_Functions_Worksheet_Stung
//It takes 8.666666667 bee stings PER POUND to kill an animal
//Calculate how many bee stings to kill an animal of a certain weight
var animalWeight =(prompt("What is the weight of the animal?"));
//Calculate variable into function
function calcKill(animalWeight){
	var beeStingsPerPound = 8.666666667;
	var kill = beeStingsPerPound * animalWeight;
	console.log=("It takes " + beeStingsPerPound + "to kill a " + animalWeight + " pound dog.");
}
//Invoke function
calKill(animalWeight);
