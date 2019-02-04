
// var hW = 'Hello World!';
// var num1 = 1;
// var age = 28;
// var firstName = 'Jason';
// var lastName = 'Johnson';

// console.log(hW + ' ' + num1);


// var job;
// console.log(job);
// job = 'DEV';
// console.log(job);

// var job, isMarried;
// job = 'teacher';
// isMarried = false;

// console.log(job + ' is married? ' + isMarried);

// Variable mutation
// age = 'twenty eight';
// job = 'driver';

// console.log(lastName);

// var lastName = prompt('What is his last Name?');

// console.log(firstName + ' ' + lastName);


// Basic Operators
// var year, yearJohn, yearMark;
// now = 2020;
// ageJohn = 29;
// ageMark = 33;

// yearJohn = now - 28;
// yearMark = now - 33;

// console.log(yearJohn);
// console.log(now + 2);

// // logical operators
// var johnOlder = ageJohn < ageMark;
// console.log(johnOlder);

// // typeof operator
// console.log(typeof johnOlder);

// Operator precedence
// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

// //Multiple operators
// var isFullAge = now - yearJohn >= fullAge;
// console.log(isFullAge);

// //Grouping
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) /2;
// console.log(average);

// // Multiple assignments
// var x, y;
// x = y = (3+5) * 4-6;//8*4-6 // 32-6 // 26
// console.log(x, y);

// // More operators
// x *= 2;
// console.log(x);

// If / else statements
// var firstName = 'John';
// var civilStatus = 'single';

// if (civilStatus === 'married') {
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' is not married!!!');
// }

// var isMarried = false;
// if (isMarried) {
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' is not married!!!');
// }

// Boolean logic

// var firstName = 'John';
// var age = 20;

// if (age < 13) {
//     console.log(firstName + ' is a boy.');
//  } else if (age >= 13 && age < 20) { // between 13 and 20
//     console.log(firstName + ' is a teenager.');
//  } else if (age >= 20 && age < 30) {
//     console.log(firstName + ' is a young man.');
//  } else {
//      console.log(firstName + ' is a man.');
//  }


// The Ternary Operator and switch statements

var firstName = 'John';
var age = 16;

// The Ternary Operator
age >= 18 ? console.log(firstName + ' drinks beer.') 
: console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

// same as above but smaller
// if (age >= 18) {
//     var drink = 'beer';
// } else {
//     var drink = 'juice';
// }
// console.log(drink);

// Switch Statement
var job = 'designer';

switch (job) {
    case 'teacher':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Dallas Texas.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}