var obj = {
    name: "Dakota",
    someMethod: function() {
        return this;
    }
};

let smallestValue = (...params) => Math.min(...params);

let returned = smallestValue(9,65,48,2,85);

// console.log(returned);



let placeInMiddle = (arr, ...vals) => {
    let middle = Math.round((arr.length - 1) / 2);
    arr.splice(middle, 0, vals);
    return arr;
};

placeInMiddle([1, 2, 8, 5, 9, 8, 7], 231,324,564,4,58,7);


let joinArrays = (...params) =>{
    let newArr = [];
    params.forEach(i => {i.forEach(x => newArr.push(x))});
    return newArr;
};

// console.log(joinArrays([231,432,3,5,7], [54, 86, 54,9], [5,5,7,68,9,10]));

let sumEvenArgs = (...params) =>  params.filter(n => !(n % 2)).reduce((acc, val) => acc + val, 0);

// console.log(sumEvenArgs(2,1,5,6,3,9,8,2,4,8));


// Below this line is object destructuring examples
 function deconObj({name = {first: "Dakota", last: "Ruller"}, isCool=true} = {}) {
    return [name.last, name.first, isCool];
}
console.log(deconObj({name: {first: "Cool", last: "Guy"}}));

let dragon = {
    type: "Fire",
    name: "Garnish",
    terrain: "Mountains"
};

let {type: dragonType, name, terrain: dragonTerrain} = dragon;

console.log(`Type: ${dragonType},\nName: ${name}, \nTerrain: ${dragonTerrain}`);


//The functions two below do the same thing
let displayStudentInfo = obj =>{
    let {first, last} = obj;
    return `Your full name is ${first} ${last}`;
};

console.log(displayStudentInfo({first: "Dakota",last: "Ruller"}));

let printFullName = ({first, last} = {}) => {
    return `Your full name is ${first} ${last}`;
};

console.log(printFullName({first: "Dakota",last: "Ruller"}));

//This one is different from the two above
let createStudent = ({likesES2015=true, likesJavaScript=true} = {}) => {
    if(likesES2015 && likesJavaScript) {
        return 'The student likes JavaScript and ES2015';
    } else if(likesES2015 && !likesJavaScript) {
        return 'The student likes ES2015!';
    } else if(likesJavaScript && !likesES2015) {
        return 'The student likes JavaScript!';
    } else {
        return 'The student does not like much...';
    }
};

console.log(createStudent({likesES2015: false, likesJavaScript: false}));

/*
Write a function called reverseArray which accepts an array and returns the array with all values reversed. See if you can do this without creating a new array!

Examples:
    reverseArray([1,2,3,4,5]) // [5,4,3,2,1]
    reverseArray([1,2]) // [2,1]
    reverseArray([]) // []
    reverseArray([1,2,3,4,5,6,7,8,9,10]) // [10,9,8,7,6,5,4,3,2,1
*/

let reverseArray = (arr) => {
    return arr.reverse(i => i);
};

console.log(reverseArray([1,2,3,4,5]));

//ES6 Classes

// 1 - Create a class for a Person. Each person should have a firstName, lastName, favoriteColor, favoriteNumber.

/* 2 - Add an instance method called multiplyFavoriteNumber that accepts one parameter and returns the product of the parameter multiplied with the favoriteNumber property on a person object.

Examples:
    var person = new Person("Elie", "Schoppik", "purple", 34)
    person.multiplyFavoriteNumber(10) // 340

*/

class Person {
    constructor(fName, lName, favColor, favNum) {
        this.firstName = fName;
        this.lastName = lName;
        this.favoriteColor = favColor;
        this.favoriteNumber = favNum;
    }
    multiplyFavoriteNumber(n) {
        return this.favoriteNumber * n;
    }
}

let alex = new Person("Alex", "Donald", "Orange", 21);

// console.log(alex.multiplyFavoriteNumber(78));

class Vehicle {
    constructor(make, model, wheels, year, sound) {
        this.make = make;
        this.model = model;
        this.wheels = wheels;
        this.year = year;
        this.sound = sound;
    }
    description() {
        return `This vehicle is a ${this.make} ${this.model}`;
    }
    honk() {
        return this.sound;
    }
    WOT() {
       return "BRAAAAAPPPPPP!!!!!!";
    }
    static isVehicle(obj) {
       return obj.constructor === Vehicle;
    };
}



class Car extends Vehicle {
    constructor(type){
        super(...arguments);
        this.type = type;
    }
}

// console.log(Vehicle.isVehicle(Car));

let dakotasCar = new Car("Volkswagen", "Jetta", 4, 2019, "Beep", "Sedan");

console.log(dakotasCar.description());
console.log(dakotasCar.WOT());

class Motorcycle extends Car {
    constructor(){
        super(...arguments);
    }
}

let chopper = new Motorcycle("Harley Davison", "Sportster", 2, 1972, "Honk", "Chopper");

// console.log("Car:");
// console.log(dakotasCar.WOT());
// dakotasCar.description();
// console.log(dakotasCar.honk());
// console.log('-----------------------');
// console.log("Motorcycle:");
// console.log(chopper.WOT());
// chopper.description();
// console.log(chopper.honk());

// Map keyword
let UsedCarDealer = new Map();

UsedCarDealer.set("Acura", 10);
UsedCarDealer.set("Maserati", 1);
UsedCarDealer.set("Alfa Romeo", 3);
UsedCarDealer.set("Jaguar", 2);
UsedCarDealer.set("Audi", 5);
UsedCarDealer.delete("Acura");

console.log(UsedCarDealer);



for(let [key, val] of UsedCarDealer) {
    console.log(`${key}: ${val}`);
}

//Set keyword
let SetThing = new Set();

SetThing.add(1);
SetThing.add("String");
SetThing.add(true);
SetThing.add(2);

console.log(SetThing);



class MessageBoard {

    /*
    In your constructor method, you should assign two properties for each object created from the MessageBoard class. The first should be a property called messages which is an empty Map, and the second is a property called id which has a value of 1.

    var m = new MessageBoard

    m.hasOwnProperty('messages') // true
    m.messages.constructor // function Map() { [native code] }
    m.hasOwnProperty('id') // true
    m.id // 1
    */

    constructor(){
        this.messages = new Map();
        this.id = 1;
    }

    /*

    Add a method called addMessage which accepts a string. The function should add a key and value to the messages map with a key of whatever the value of this.id is and a value of whatever the string is that is passed to the function. The function should return the object created from the class so that the method can be chained. (HINT - to implement the last part, make sure to return this).

    var m = new MessageBoard
    m.addMessage('hello');
    m.messages.size // 1
    m.addMessage('awesome!') // m
    m.addMessage('awesome!').addMessage('nice!').addMessage('cool!')
    */

    addMessage(string){
        this.messages.set(this.id++, string);
        return this;
    }

    /*
    Add a method called findMessageById which accepts a number and returns the message in the messages map with the same key as the number passed to the function. If the key is not found in the messages map, the function should return undefined.


    var m = new MessageBoard
    m.addMessage('hello!')
    m.addMessage('hi!')
    m.addMessage('whats up?')
    m.findMessageById(1) // 'hello!'
    m.findMessageById(2) // 'hi!'
    m.findMessageById(3) // 'whats up?'
    m.findMessageById(4) // undefined
    m.findMessageById() // undefined
    */

    findMessageById(searchedId){
        return this.messages.get(searchedId);
    }

    /*
    Add a method called findMessageByValue which accepts a string and returns the message in the messages map with the same value as the string passed to the function. If the value is not found in the messages map, the function should return undefined.

    var m = new MessageBoard
    m.addMessage('hello!')
    m.addMessage('hi!')
    m.addMessage('whats up?')
    m.findMessageByValue('hello!') // 'hello!'
    m.findMessageByValue('hi!') // 'hi!'
    m.findMessageByValue('whats up?') // 'whats up?'
    m.findMessageByValue('nothing here') // undefined
    m.findMessageByValue() // undefined
    */


    findMessageByValue(val){
        for(let x of this.messages.values()) {
            if (x === val) return x;
        }
    }

    /*
    Add a method called removeMessage which accepts a number and removes a message in the messages map with a key of the number passed to the function.

    var m = new MessageBoard
    m.addMessage('hello!')
    m.addMessage('hi!')
    m.addMessage('whats up?')
    m.removeMessage(1)
    m.removeMessage(2)
    m.messages.size // 1
    m.removeMessage() // m
    */

    removeMessage(key){
        this.messages.delete(key);
        return this;
    }

    /*
    Add a method called numberOfMessages which returns the number of keys in the messages map

    var m = new MessageBoard
    m.addMessage('hello!')
    m.addMessage('hi!')
    m.addMessage('whats up?')
    m.numberOfMessages() // 3
    */

    numberOfMessages(){
        return this.messages.size;
    }

    /*
    Add a method called messagesToArray which returns an array of all of the values in the messages map

    var m = new MessageBoard
    m.addMessage('hello!')
    m.addMessage('hi!')
    m.addMessage('whats up?')
    m.messagesToArray() // ['hello!', 'hi!', 'whats up?'])
    */

    messagesToArray(){

        //The code below works.

        // let arr = [];
        // for(let x of this.messages.values()) {
        //     arr.push(x);
        // }
        // return arr;

        //This works as well but its cleaner.
        //This utilizes the Array.from method provided es6.

        return Array.from(this.messages.values());
    }
}

let MapObj = new MessageBoard();

MapObj.addMessage("Thing 1");
MapObj.addMessage("Thing 2");
MapObj.addMessage("Thing 3");
// MapObj.removeMessage(2);

console.log(MapObj.messagesToArray());

class Dog {
    constructor() {
        this.sound = "Bork";
    }

    makeNoise() {
        return this.sound;
    }
}


// Methods Practice
/*
Write a function called copyObject, which accepts one parameter, an object. The function should return a shallow copy of the object.

var o = {name: 'Elie'}
var o2 = copyObject({}, o)
o2.name = "Tim"
o2.name // 'Tim'
o.name // 'Elie'
*/

let copyObject = obj => Object.assign({}, obj);

let baseObj = {name: "Kyle", hobby: "Building cars"};

let newObj = copyObject(baseObj);

newObj.name = "Dakota";

console.log(newObj.name);
console.log(newObj);
console.log(baseObj.name);
console.log(baseObj);

/*

Write a function called checkIfFinite which accepts one parameter and returns true if that parameter is a finite number.

checkIfFinite(4) // true
checkIfFinite(-3) // true
checkIfFinite(4. // .toEqual(true
checkIfFinite(NaN) // false
checkIfFinite(Infinity) // false
*/

let checkIfFinite = num => isFinite(num);
console.log(checkIfFinite(4));

/*

Write a function called areAllNumbersFinite which accepts an array and returns true if every single value in the array is a finite number, otherwise return false.

var finiteNums = [4,-3,2.2]
var finiteNumsExceptOne = [4,-3,2.2,NaN]
areAllNumbersFinite(finiteNums) // true
areAllNumbersFinite(finiteNumsExceptOne) // false
*/


// This doesnt work so fix it when you come back
let areAllNumbersFinite = arr => arr.every(Number.isFinite);

let numArr = [1,2,3, NaN];

let checkIfNum = areAllNumbersFinite(numArr);
checkIfNum;

/*

Write a function called convertArrayLikeObject which accepts a single parameter, an array like object. The function should return the array like object converted to an array.

var divs = document.getElementsByTagName('div')
divs.reduce // undefined

var converted = convertArrayLikeObject(divs)
converted.reduce // funciton(){}...
*/


// This function does what its suppose to but with the added functionality of removing spaces
let convertArrayLikeObject = param => {
    console.log(param);
        let newArr = Array.from(param);
        newArr.find(x => {
            if(x === " ") {
                let index = newArr.indexOf(x);
                newArr.splice(index, 1);
            }
        });
    return newArr;
};

let strongString = "A String With Spaces";

let thing = convertArrayLikeObject(strongString);
thing;


/*

Write a function called displayEvenArguments which accepts a variable number of arguments and returns a new array with all of the arguments that are even numbers.

displayEvenArguments(1,2,3,4,5,6) // [2,4,6]
displayEvenArguments(7,8,9) // [8]
displayEvenArguments(1,3,7) // []
*/

let displayEvenArguments = (...args) => {
    return Array.from(args).filter(x => x % 2 === 0);
};

let array = displayEvenArguments(3, 4, 5, 6, 7, 2, 1, 2, 8, 2, 4, 7);

array;