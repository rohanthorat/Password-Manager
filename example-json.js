var person = {
	name: 'Rohan',
	age: 24
};

var personJSON = JSON.stringify(person);

console.log(personJSON);
console.log(typeof personJSON);

var personObject = JSON.parse(personJSON);

console.log(personObject.name);
console.log(typeof personObject);

console.log('Challenge Area');

var animal = '{"name":"Lexy"}';

var animalObject = JSON.parse(animal);
console.log(animalObject.name);
console.log(typeof animalObject);

animalObject["age"] = 24;

var animalJSON = JSON.stringify(animalObject);
console.log(animalJSON);
console.log(typeof animalJSON);