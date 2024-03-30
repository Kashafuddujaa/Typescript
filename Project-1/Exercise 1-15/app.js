"use strict";
let ayfah = "Hey Ayfah! Would you like to learn some python today?";
console.log(ayfah);
// uppercase
let text = "mirza mustafa ahmed";
let result = text.toUpperCase();
console.log(result);
//lowercase
let xyz = "HUZAIFA KHAN";
let output = xyz.toLowerCase();
console.log(output);
// trimming spaces 
let spaceText = "   Hello, how are you?  ";
let trimSpace = spaceText.trim();
console.log(trimSpace);
// quote
// let quote = "A person who never made a mistake never tried anything new.";
// let author = "Albert Eintsen";
// console.log(`${author} once said, "${quote}"`);
// famous quote
let quote = "A person who never made a mistake never tried anything new.";
let famous_person = "Albert Eintsen";
let message = `${famous_person} once said, "${quote}"`;
console.log(message);
//stripping names
const fullName = "\tMirza mustafa ahmed\n";
console.log(`Name with whitespace: '${fullName}'`);
let strippedName = fullName.trim();
console.log(`Stripped Name: '${strippedName}'`);
// Addition
console.log(`Addition: 5 + 3 = ${5 + 3}`);
// subtraction
console.log(`Subtraction: 10 - 2 = ${10 - 2}`);
// Multiplication
console.log(`Multiplication: 4 * 2 = ${4 * 2}`);
//Division
console.log(`Division: 64 / 8 = ${64 / 8}`);
//favourite number
let favNum = 16;
console.log(`My favourite number is ${favNum}`);
//names
const friends = ["Mustafa", "Kashaf", "Huzaifa", "Filza"];
//print each person's name
for (let i = 0; i < friends.length; i++) {
    console.log(friends[i]);
}
const nfren = ["Huzaifa", "Kashaf", "Mustafa"];
for (let i = 0; i < nfren.length; i++) {
    console.log(nfren[i] + " is not my friend");
}
// cars array
const favorite_cars = ["Tesla Model S", "BMW M3", "Audi R8", "Porsche 911", "Ford Mustang"];
// print out the make of each car in the list
for (const car of favorite_cars) {
    console.log("I would like to own a", car + ".");
}
// Guest List
const guestList = ["Mustafa", "Huzaifa", "Hamza", "Hannan"];
for (const guests of guestList) {
    console.log(`Dear ${guests},\nYou are cordially invited to dinner. It would be an honor to have your presence.\nPlease let me know if you can attend.\nBest regards,\n[Kashaf Ud Duja]`);
}
const guests = ["Mustafa", "Huzaifa", "Hamza", "Hannan"];
const unableToAttend = guests.pop(); // Remove last item from array
guests.push('Ahmed'); // Add new item to array
for (const guest of guests) {
    console.log(`Dear ${guest}, \nYou are invited to our party.`);
}
console.log(`\nUnfortunately, ${unableToAttend} will be unable to attend.`);
