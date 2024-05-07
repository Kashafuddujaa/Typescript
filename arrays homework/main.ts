// Basic array operations
let fruits = ["apple","mango","banana","strawberry"];
fruits.push("Orange"); // adds orange to the end
fruits.shift;
fruits.unshift("Grapes");// adds grapes to the start of an array
// find the index
let index = fruits.indexOf("banana");
if (index !== -1){
    fruits.splice(index, 1);
    console.log("Fruits array after removing banana:" , fruits);
} else {
    console.log("Banana not found");
}


// Define a 3x3 matrix as a multidimensional array
let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Function to print the diagonal elements of the matrix
function printDiagonal(matrix: number[][]) {
    let diagonalElements: number[] = [];
    for (let i = 0; i < matrix.length; i++) {
        diagonalElements.push(matrix[i][i]);
    }
    console.log("Diagonal elements:", diagonalElements.join(", "));
}

// Function to calculate the sum of all elements in the matrix
function sumOfElements(matrix: number[][]): number {
    let sum = 0;
    for (let row of matrix) {
        for (let element of row) {
            sum += element;
        }
    }
    return sum;
}

// Test the functions
printDiagonal(matrix);
console.log("Sum of all elements in the matrix:", sumOfElements(matrix));
