// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;
// const button = document.getElementById("btn")!;
// const add = function (val1: number , val2: number) {
//     return val1 + val2;
// };
// button.addEventListener("click", function () {
//     const firstVal = input1.value;
//     const secondVal = input2.value;
//     console.log(add(+firstVal, +secondVal));
// });

// Basic ts types 
// 1. String: string => "Apple","Orange"
// 2. Number: number => 1 0 -87 4.5
// 3. Boolean: boolean => true false

// let person = "Kashafudduja";
// person = "Huzaifa";

// const arr: string[] = ["Apple","Orange"];
// arr.push ("Pineapple");

// const arr2: number[] | string[] = [1,2,3];
// arr2.push (7);



// 28/3/23
// type Person = {
//     name: string;
//       rollNo: number;
//       hobbies: string[];
//       email: string
// };


// let person = {
//     name : "Huzaifa",
//     rollNo : 146,
//     hobbies : ["Video Games"],
//     email : ""
    
// }
// person.email = "test@test.com"

// const persons: Person[] = [];
// persons.push({
//     name: "Kashaf Ud Duja",
//     rollNo: 164,
//     hobbies: ["coding"],
//     email : "test@test.com"
// });


//Tuples
let gender =  [string, string] = ["Male", "female"]