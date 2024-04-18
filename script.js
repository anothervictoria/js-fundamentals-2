"use strict"; //should be the very first line of code. in other cases it won't be strict

//strict mode lecture

////////////////////////

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log("I can drive");

function logger() {
  console.log("My name is Jonas");
}

// calling / running / invoking function
logger();
logger();
logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 1);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// FUNCTIONS

//// function declaration. You can call function declaration before you define it

function calcAge1(birthYear) {
  return 2027 - birthYear;
}

const age1 = calcAge1(1994);
console.log(age1);

/////// function expression. You can't call function expression before you define it.

const calcAge2 = function (birthYear) {
  return 2027 - birthYear;
};

const age2 = calcAge2(1994);
console.log(age1, age2);

// Arrow function
// used easily when we have only one parameter and one line of code

const calcage3 = (birthYear) => 2027 - birthYear;
const age3 = calcage3(1994);
console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2024 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1994, "Victoria"));

//// FUCTIONS CALLING OTHER FUNCTIONS

function cutFruitPieces(fruit) {
  return fruit * 4;
}

const fruitProcessor = function (apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
};

console.log(fruitProcessor(2, 3));

//functions overview

const calcAge4 = function (birthYear) {
  return 2024 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge4(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    return retirement;
  } else {
    return -1;
  }

  // return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1994, "Victoria"));
console.log(yearsUntilRetirement(1950, "Mike"));

/* CHALLENGE #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!



Your tasks:

Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

Ignore draws this time. Instead, log No team wins... to the console if there is no winner.



TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.

*/

// const calcage3 = (birthYear) => 2027 - birthYear;

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

// const scoreDolphins = calcAverage(85, 54, 41);
// const scoreKoalas = calcAverage(23, 34, 27);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins > 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgDolphins} vs. ${avgKoalas})`);
  } else {
    console.log("No team wins...");
  }
}
checkWinner(scoreDolphins, scoreKoalas);

////////////////////////////////////////
//arrays - lecture 1

// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends.length - 1); // last element of the array

// friends[2] = "Jay";
// console.log(friends);

// //friends = ['Bob', 'Alice']; //we can replace some elements in the array but can't replace array itsels when it is const

// const myFirstName = "Victoria";
// const victoria = [myFirstName, "Panidi", 2024 - 1994, "student", friends];
// console.log(victoria);

// //Exercise
// const calcAge = function (birthYear) {
//   return 2024 - birthYear;
// };

// const allYears = [1990, 1967, 2002, 2010, 2014];
// console.log(calcAge(allYears)); // result: NaN
// const ageYear1 = calcAge(allYears[0]);
// const ageYear2 = calcAge(allYears[1]);
// const ageYear3 = calcAge(allYears[allYears.length - 1]);
// console.log(ageYear1, ageYear2, ageYear3);

// const ages = [
//   calcAge(allYears[0]),
//   calcAge(allYears[1]),
//   calcAge(allYears[allYears.length - 1]),
// ];
// console.log(ages);

////////////////////////////////////////////////////////////////
///////arrays - lecture 2

//Add elements
const friends = ["Michael", "Steven", "Peter"];
friends.push("Jay"); //adds element to the end of the array
console.log(friends);

friends.unshift("John"); // adds element to the beginning of the array
console.log(friends);

//if we store new elements in a variable, it returns new lenghth of the array
const newLength = friends.push("Manana");
console.log(newLength);
console.log(friends);

//Remove elements
friends.pop(); //removes last element
console.log(friends);

const popped = friends.pop();
console.log(popped); //returns the removed element
console.log(friends);

friends.shift(); //removes first elements of the array
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob")); // if we refer to the elements that is not in the array, we will get -1

//includes method return true or falce value if it is elemts is presented in the array
friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes("23"));
//includes method uses strict equality to check elements, so if we add 23 as a number value and then check the 23 string, it wouldn't work and will return the false, because strict equality doesn't make type coercion
//but if we check number 23 it is going to work
console.log(friends.includes(23));

//And so we can use the include method to write conditionals.
//So that's one of the very useful application of this method.
if (friends.includes("Peter")) {
  console.log("You have a friend called Peter");
}

/* 
Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill 
if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

Write a function calcTip that takes any bill value as an input and returns the corresponding tip, 
calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). 
Use the function type you like the most. Test the function using a bill value of 100.

And now let's use arrays! So, create an array called bills containing the test data below.

Create an array called tips containing the tip value for each bill, calculated from the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44.
*/

let bill;
let tip;
let totalValue;
const bills = [125, 555, 44];
const tips = [];
const totals = [];

/* Write your code below. Good luck! 🙂 */

const calcTip = function (bill) {
  tip = bill >= 50 && bill <= 300 ? (tip = bill * 0.15) : (tip = bill * 0.2);
  console.log(tip);
  tips.push(tip);
  console.log(tips);
  totalValue = bill + tip;
  totals.push(totalValue);
  console.log(`total value is ${totalValue}`);
  return tip;
};

calcTip(bills[0]);
calcTip(bills[1]);
calcTip(bills[2]);

// bill >= 50 && bill <= 300 ? (tip = bill * 0.15) : (tip = bill * 0.2);
// totalValue = bill + tip;
// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value ${totalValue}`
// );

//INTRODUCTION TO OBJECTS:

//But in arrays,there is no way of giving these elements a name. And so we can't reference them by name,but only by their o rder number in which they appear in the array.

const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

//we have the object which contains 5 key-value pairs
// each of these keys is also calles a property. So we say that this object here which is called Jonas has five properties. So property first name with the value 'Jonas'.

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991, //we can put any expression
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(jonas);

//to get the property value we use dot notation. Needs real property name.
console.log(jonas.lastName);

//we use or bracket notation
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
);
if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}

//adding properties to the object
jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);

//Challenge
//'Jonas has 3 friends, and his best friend is called Michael'
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);
