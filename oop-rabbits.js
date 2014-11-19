
// Defining Methods - p.94
var rabbit = {};

rabbit.speak = function(line) {
	console.log('The plain rabbit says "' + line + '"');
};

rabbit.speak("I'm alive.");


function speak(line) {

	console.log("The " + this.adjective + " rabbit says '" + line + "'");
}

var whiteRabbit = {adjective: "white", speak: speak};
var fatRabbit = {adjective: "fat", speak: speak};
var loneRabbit = {adjective: "lone", speak: speak, run: run};

whiteRabbit.speak("I am the white rabbit");
fatRabbit.speak("I am the FAT rabbit");
loneRabbit.speak("I am the LONE rabbit");

speak.apply(fatRabbit, ["Yum!"]);
speak.call(fatRabbit, "Yum!");


function run(from, to) {
	console.log("The " + this.adjective + " rabbit runs from " + from + " to " + to + ".");
}

run.apply(whiteRabbit, ["A", "B"]);
run.call(fatRabbit, "the cupboard", "the fridge");
loneRabbit.run("here", "there");


// Constructors - p.95
function Rabbit(adjective) {
	this.adjective = adjective;
	this.speak = function(line) {
		console.log("The " + this.adjective + " rabbit says '" + line + "'");
	};
}

var killerRabbit = new Rabbit("killer");
killerRabbit.speak("Graaaaaah!");


// prototypal as object literal
function Thing(name) {
	this.name = name;
}

Thing.prototype = {
	action: 
}


// Daily JS prototype examples
// http://dailyjs.com/2012/05/21/js101-prototype/
function Animal() {}
console.log(Animal.prototype);

Animal.prototype.name = "unnamed";
Animal.prototype.type = "Unknown animal type";
Animal.prototype.weight = 0;
Animal.prototype.weightUnits = "kg";

console.log('Animal.prototype' + Animal.prototype);

Animal.prototype.toString = function() {
  return this.name + ' is a ' + this.type + ', ' + this.weight + this.weightUnits;
};

var molly = new Animal();
console.log(molly.toString());

molly.name = "Molly";
molly.type = "Dog";
molly.weight = 28;
console.log(molly.toString());

// now all in one
function Creature() {
	this.name = 'unknown name',
	this.type = 'unknown type',
	this.weight = 0,
	this.weightUnits = 'kg'
}
console.log('Creature.prototype: ' + Creature.prototype);
console.log('Creature: ' + Creature);
