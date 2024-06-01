import inquirer from "inquirer";

const quiz: {
  question_1: string;
  question_2: string;
  question_3: string;
  question_4: string;
  question_5: string;
} = await inquirer.prompt([
  {
    name: "question_1",
    type: "list",
    message: "Q1: What is the capital city of Australia? ",
    choices: ["a:sydney", "b:Melbourne", "c:Canberra", "d:Brisbanne"],
  },
  {
    name: "question_2",
    type: "list",
    message: "What is the chemical symbol for Gold?",
    choices: ["a) Gd", "b) Go ", "c) Ag", "d) Au"],
  },
  {
    name: "question_3",
    type: "list",
    message: "Which one of the following also known as Conditional Expression:",
    choices: [
      "a:Alternative to if-else",
      "b:Switch statement",
      "c:If-then-else statement",
      "d:immediate if",
    ],
  },
  {
    name: "question_4",
    type: "list",
    message:
      " When interpreter encounters an empty statements, what it will do:",
    choices: [
      "a: Shows a warning",
      "b:Prompts to complete the statement",
      "c:Throws an error",
      "d:Ignores the statements",
    ],
  },
  {
    name: "question_5",
    type: "list",
    message: "Which type of JavaScript language is ___",
    choices: [
      "a: Object-Oriented",
      "b:Object-Based",
      "c:Assembly-language",
      "d:High-level",
    ],
  },
]);

let score: number = 0;
switch (quiz.question_1) {
  case "c:Canberra":
    console.log("1: correct");
    ++score;
    break;
  default:
    console.log("1. Incorrect");
}

switch (quiz.question_2) {
  case "d) Au":
    console.log("2: correct");
    ++score;
    break;
  default:
    console.log("2. Incorrect");
}
switch (quiz.question_3) {
  case "c:If-then-else statement":
    console.log("3: correct");
    ++score;
    break;
  default:
    console.log("3. Incorrect");
}

switch (quiz.question_4) {
  case "d:Ignores the statements":
    console.log("4: correct");
    ++score;
    break;
  default:
    console.log("4. Incorrect");
}

switch (quiz.question_5) {
  case "a: Object-Oriented":
    console.log("5: correct");
    ++score;
    break;
  default:
    console.log("5. Incorrect");
}

console.log(`Score: ${score}`);