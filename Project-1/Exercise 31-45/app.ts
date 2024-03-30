// EXERCISE 30
// Make a array of five or more usernames
const userNames = ["admin", "Eric", "John", "Jane", "Bob"];
for (const userName of userNames){
    if (userName == 'admin'){
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${userName}for logging in again`);
    }
}

// EXERCISE 31
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
const users = [];
if (users.length === 0){
    console.log("We need to find some users");
} else {
    for (const userName of userNames){
        if (userName === 'admin'){
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${userName}for logging in again`);
        }
    }
}

// EXERCISE 32 
//Checking Usernames
const currentUsers = ["Mustafa", "Kashaf", "Huzaifa", "Taha","Filza"];
const newUsers = ["Fatima", "Hasan", "Ahmed", "Hamza", "Hannan"];
for (let newUser of newUsers){
    let lowerCase_newuser  = newUser.toLowerCase();
    // Check if the new username already exists in the current users list
    if(currentUsers.map(user => user.toLowerCase()).includes(lowerCase_newuser)){
        console.log(`Sorry ${newUser}, that username is taken`);
    } else {
        console.log(`Congratulation ${newUser}, Your username has been added!`);
    }
}

// EXERCISE 33
// ordinal number
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let number of numbers) {
    let ordinal: string;
    if (number === 1){
        ordinal = "st";
    } else if
         (number === 2){
          ordinal = "nd";
         } else if
         (number === 3){
            ordinal = "rd";
         } else {
            ordinal = "th";
         }
         console.log(`${number}${ordinal}`);
         }
    
         // EXERCISE 34
         // Store pizza names in array
         const pizzas = ["Pepperoni","Creamy Chicken","Ranch","Malai Boti"];
         // use a for loop to print the name of each pizza.
         for (let pizza of pizzas){
            console.log(`I Like ${pizza} pizza`);
         }
         console.log(`I also love chicken fajita and margherita. I like all flavors of pizzas but my favourite ones are ${pizzas}`);

         // EXERCISE 35
         const animals = ["cat","dog","rabbit"];
         for(const animal of animals){
            console.log(`A ${animal} would make a great pet.`)
         }
   console.log(`The common characteristics of these ${animals} are that they are often kept as pets.`);

   // EXERCISE 36
   
   function make_shirt(size : string, message: string){
    console.log(`You have ordered a ${size} size shirt with ${message} on it`)
   }
   // calling the function
   make_shirt("Large", "Keep Calm");

   // EXERCISE 37
   function makeShirt(size: string = "Large", message: string = "I love typescript"){
     console.log(`You have ordered a ${size} size shirt with ${message} print on it`)
   }
   // large shirt with default message
   makeShirt();
   // Medium shirt with default message
   makeShirt("Medium");
   // Custom shirt
   makeShirt("small", "Typescript rocks!!");

   // EXERCISE 38
   function describe_city(city: string, country: string= "unknown"): void{
         console.log(`${city} is in ${country}`);
   }

// Calling the function for different cities
describe_city("Karachi", "Pakistan");
describe_city("Ankara","Turkey");
describe_city("New York"); // This will use the default country value

// EXERCISE 39
function city_country(city: string, country:string): string{
 return(` ${city} is located in ${country}`);
}
// Calling the function with city-country pairs
console.log(city_country ("Karachi", "Pakistan"));
console.log(city_country("London", "United Kingdom"));
console.log(city_country("Tokyo", "Japan"));

// EXERCISE 40

// Create a music album

function make_album(artist: string, title: string, tracks?: number): { artist: string; title: string; tracks?: number } {
    const album = { artist: artist, title: title, tracks };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}

// Creating albums with different information
const album1 = make_album("Artist1", "Album1");
const album2 = make_album("Artist2", "Album2", 12);
const album3 = make_album("Artist3", "Album3", 8);

// Printing the album information
console.log(album1);
console.log(album2);
console.log(album3);


// // EXERCISE 41
//  const magician = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
// function show_magician(magician:string[]): void{
//  magician.forEach(magicians =>{
//     console.log(magician)
//  });
//  show_magician(magician);
// }

// // EXERCISE 42
// function showMagician(magicians: string[]): void {
//     magicians.forEach(magician => {
//         console.log(magician);
//     });
// }

// const magicians = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// function make_great(magicians: string[]) {
//     return magicians.map(magician => `the Great ${magician}`);
// }

// // Call the make_great() function to modify the magicians array
// const great_magicians: string[] = make_great(magicians);

// // Show the modified list of magicians
// showMagician(great_magicians);


// EXERCISE 43
function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}

// Original array of magician's names
const original_magicians: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// Call the make_great() function with a copy of the original array
const great_magicians: string[] = make_great([...original_magicians]); // Create a copy using spread operator

// Show the original list of magicians
console.log("Original Magicians:");
show_magicians(original_magicians);

// Show the modified list of magicians
console.log("\nGreat Magicians:");
show_magicians(great_magicians);


// exercise 44
function order_sandwich(...items: string[]): void {
    console.log("Order Summary:");
    if (items.length === 0) {
        console.log("No items on the sandwich.");
    } else {
        console.log("Sandwich contains:");
        items.forEach(item => {
            console.log("- " + item);
        });
    }
    console.log("-------------------------");
}

// Call the function with different number of arguments
order_sandwich("Ham", "Cheese", "Lettuce");
order_sandwich("Turkey", "Swiss Cheese", "Tomato", "Mayonnaise");
order_sandwich("Tuna Salad");


// EXERCISE 45
function store_car_info(manufacturer: string, model: string, ...extras: { [key: string]: any }[]): { manufacturer: string; model: string; [key: string]: any } {
    const carInfo: { manufacturer: string; model: string; [key: string]: any } = { manufacturer, model };
    extras.forEach(extra => {
        for (const key in extra) {
            if (extra.hasOwnProperty(key)) {
                carInfo[key] = extra[key];
            }
        }
    });
    return carInfo;
}

// Call the function with required information and additional key-value pairs
const car = store_car_info("Toyota", "Camry", { color: "red", year: 2022 });

// Print the object containing car information
console.log(car);

