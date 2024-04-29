#! /usr/bin/env code
import inquirer from "inquirer";

// Rock Paper scissor game

async function playGame() {
  let playerName = await inquirer.prompt([
    {
      name: "name",
      type: "string",
      message: "Enter your name",
    },
  ]);

  const choices = ["Rock", "Paper", "Scissor"];
  const playerChoice = await inquirer.prompt([
    {
      name: "choice",
      type: "list",
      message: "Choose your move",
      choices: choices,
    },
  ]);

  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  let result;
  switch (playerChoice.choice) {
    case "Rock":
      if (computerChoice === "Scissor") {
        result = "You win!";
      } else if (computerChoice === "Paper") {
        result = "You Lost";
      } else {
        result = "It's a tie";
      }
      break;
    case "Paper":
      if (computerChoice === "Rock") {
        result = "You win!";
      } else if (computerChoice === "Scissor") {
        result = "You Lost";
      } else {
        result = "It's a tie";
      }
      break;
    case "Scissor":
      if (computerChoice === "Paper") {
        result = "You win!";
      } else if (computerChoice === "Rock") {
        result = "You Lost";
      } else {
        result = "It's a tie";
      }
      break;
  }
  console.log(`You chose: ${playerChoice.choice}`);
  console.log(`Computer choice: ${computerChoice}`);
  console.log(result);
}

playGame();
