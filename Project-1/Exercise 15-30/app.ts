// Exercise 16
//More Guests: 
const guests = ["Ahmed", "Mustafa", "Hannan", "Hamza"];
console.log("Good News! we found a bigger table")
//Add one new guest to the beginning of your array
guests.unshift("Maira");
//Add one new guest to the middle of your array
guests.splice(2,0,"Sara");
//add one new guest to the end of your list
guests.push("Huzaifa");

for(const guest of guests){
    console.log(`Dear ${guest},\nYou are cordially invited to dinner. It would be an honor to have your presence.\nPlease let me know if you can attend.\nBest regards,\n[Kashaf]`);
};


// Exercise 17
//Shrinking Guest List
let guest = ["Ahmed", "Mustafa", "Hannan", "Hamza"];
console.log("Unfortunately , we have only space for two people");
// Remove guest
while (guest.length > 2){
    const removedGuest = guest.pop();
    console.log(`Sorry ${removedGuest} we can't invite you to dinner`);
}
// Print a message to each of the two people still on your list, letting them know they’re still invited.
for(const guests of guest){
    console.log(`Congratulations ${guest} \nYou are still invited to our dinner`);
}
// Remove the last two names from your list
guest.pop();
guest.pop();
console.log("Remaining guests", guest);


// EXERCISE 18
//Store the locations in a array
const places = ["Italy","London","Turkey","Dubai","Palestine","Egypt","Canada"]
//Print your array in its original order
console.log("Original Order : ",places);
//Print your array in alphabetical order without modifying the actual list
console.log("Alphabetical Order  :\n" + places.sort());
//Show that your array is still in its original order by printing it
console.log("Still in its orignal order? :\n ", places);
//Print your array in reverse alphabetical order without changing the order of the original list
console.log("Reverse Alphabetical Order : \n", places.sort().reverse());
//Show that your array is still in its original order by printing it again.
console.log("Still in its orignal order? \n", places);
//Reverse the order of your list. 
places.reverse();
console.log("After reversing the order \n", places);
//Reverse the order of your list again. 
places.reverse();
console.log("Back to its orignal order \n", places);
//Sort your array so it’s stored in alphabetical order. 
places.sort();
console.log("Now the order has been changed and sorted \n", places);
//Sort to change your array so it’s stored in reverse alphabetical order.
places.sort().reverse();
console.log("The order has been changed and sorted in reverse alphabetical order \n",places);


// EXERCISE 19
// Dinner Guests
const guestList = ["Ahmed", "Mustafa", "Hannan", "Hamza", "Huzaifa","Kashaf"];
// Print out the names of each guest in the list
for(const guest of guestList){
    console.log("Guests Name:", guest);
}
// Print the number of people you are inviting to dinner
console.log("Number of people that are invited", guestList.length);


// EXERCISE 20 
// List of mountains 
const mountainNames = ["Mount Everest","K2","Karakoram","Nanga Parbat","Broad Peak","Himalyas","Hindu Kush","Gasherbrum"];
console.log("List of Mountains in Pakistan:");
for (const mountains of mountainNames){
    console.log("- " + mountains);
}

// EXERCISE 21
//typescript objects
const fruits : { [key : string]: {color : string, taste : string, origin : string} } = {
    "apple": { color : "Red", taste : "Sweet", origin : "various"},
    "banana": {color : "Yellow", taste : "Sweet", origin : "tropics"},
    "grapes": {color : "Purple", taste: "Sour", origin: "Asia"},
    "strawberry": {color : "Red", taste:"Sweet", origin: "various" }
};
console.log("Fruits Information:");
for(const fruit in fruits){
   console.log(`${fruit}:`);
   console.log(`  - Color: ${fruits[fruit].color}`);
   console.log(` - Taste: ${fruits[fruit].taste}`);
   console.log(` - Origin: ${fruits[fruit].origin}`);
}


// EXERCISE 22
// intentional error:
// const array1 = ["a","b","c","d","e"];
// console.log(array1[5]);
// Correct Code:
const array1 = ["a","b","c","d","e"];
// Check if the index is within the bounds of the array
const index = 5;
if(index >= 0 && index < array1.length){
    console.log(array1[index])
} else{
    console.log( `The provided index (${index}) is out of bound for this array!`)
}

// EXERCISE 23
//Conditional Tests
let car = 'bugatti chiron';
console.log("Is car == 'bugatti chiron'? I predict true")
console.log(car == 'bugatti chiron');

console.log("Is car == 'toyota'? I predict False.");
console.log(car == 'toyota');

let num = 10;
console.log("Is num > 5? I predict True.");
console.log(num > 5);

console.log("Is num < 5? I predict False.");
console.log(num < 5);

let fruit = 'banana';
console.log("is fruit != apple? i predict true.");
console.log(fruit != 'apple');

console.log("is fruit == orange? i predict false");
console.log(fruit == 'orange');

let isRaining = true;
console.log("is it raining? i predict true")
console.log(isRaining);

console.log("is it sunny? i predict false");
console.log(!isRaining);

// EXERCISE 25
let  alien_color = 'green';
if (alien_color == 'green'){
       console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
let alienColor = 'red';
if (alienColor == 'green'){
           console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}

// Exercise 26
let alien = 'green';
if(alien == 'green'){
    console.log("You have earned 5 points!!")
} else {
  console.log("You just earned 10 points!!");
}

// part 2
let color = 'yellow';
if (color == 'green'){
    console.log("you just earned 5 points for shooting green alien")
} else {
    console.log("you just earned 10 points for shooting non green alien");
}

// EXERCISE 27
let color_alien = 'green';
if(color_alien == 'green'){
    console.log("Congratulations you just earned 5 points")
} else if (color_alien == 'yellow') {
    console.log("Congratulations you just earned 10 points for shooting yellow alien")
} else if (color_alien == 'red'){
    console.log("Congratulations you just earned 15 points for shooting red alien");
}
// second version
let colorAlien = 'yellow';
if (colorAlien == 'green'){
    console.log("Congratulations you just earned 5 points for shotting green alien")
} else if (colorAlien == 'yellow'){
    console.log("Congratulations you just earned 10 points for shooting yellow alien")
} else if (colorAlien == 'red'){
    console.log("Congratulations you just earned 15 points for shooting red alien");
}
// third version
let c_alien = 'red';
if (c_alien == 'green'){
    console.log("Congratulations you just earned 5 points for shotting green alien")
} else if (c_alien == 'yellow'){
    console.log("Congratulations you just earned 10 points for shooting yellow alien")
} else if (c_alien == 'red'){
    console.log("Congratulations you just earned 15 points for shooting red alien");
}

// EXERCISE 28
let age = 30;
if (age < 2){
    console.log("The person is a baby.");
} else if (age >= 2 && age < 4){
    console.log("The person is a toddler.");
} else if (age >= 4 && age < 13){
    console.log("The person is a kid.");
} else if (age >= 13 && age < 20){
    console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}

// EXERCISE 29
let favorite_fruits = ["apple", "banana", "strawberry"];

if (favorite_fruits.includes("apple")) {
    console.log("You really like apples!");
}

if (favorite_fruits.includes("banana")) {
    console.log("You really like bananas!");
}

if (favorite_fruits.includes("strawberry")) {
    console.log("You really like strawberries!");
}

if (favorite_fruits.includes("orange")) {
    console.log("You really like oranges!");
}

if (favorite_fruits.includes("grape")) {
    console.log("You really like grapes!");
}
