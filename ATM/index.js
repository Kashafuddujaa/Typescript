#! /usr/bin/env node
import inquirer from "inquirer";
// Simulated user account data 
const accounts = [
    { accountNumber: "123456", pin: "1234", balance: 1000 },
    { accountNumber: "987654", pin: "4321", balance: 500 },
];
// Function to simulate ATM operations
function performATMOperation(account) {
    inquirer.prompt({
        type: "list",
        name: "action",
        message: "Choose an operation:",
        choices: ["Check Balance", "Withdraw Cash", "Deposit Cash", "Exit"],
    })
        .then((answers) => {
        switch (answers.action) {
            case "Check Balance":
                console.log(`Your balance: $${account.balance}`);
                break;
            case "Withdraw Cash":
                inquirer
                    .prompt({
                    type: "number",
                    name: "amount",
                    message: "Enter amount to withdraw:",
                })
                    .then((withdrawal) => {
                    if (withdrawal.amount > account.balance) {
                        console.log("Insufficient funds!");
                    }
                    else {
                        account.balance -= withdrawal.amount;
                        console.log(`Withdrawn: $${withdrawal.amount}`);
                        console.log(`Remaining balance: $${account.balance}`);
                    }
                });
                break;
            case "Deposit Cash":
                inquirer.prompt({
                    type: "number",
                    name: "amount",
                    message: "Enter amount to deposit:",
                })
                    .then((deposit) => {
                    account.balance += deposit.amount;
                    console.log(`Deposited: $${deposit.amount}`);
                    console.log(`Updated balance: $${account.balance}`);
                });
                break;
            case "Exit":
                console.log("Thank you for using our ATM!");
                return;
        }
        // Recursive call to perform another operation
        performATMOperation(account);
    });
}
// Main function to simulate ATM login
function main() {
    inquirer
        .prompt([
        {
            type: "input",
            name: "accountNumber",
            message: "Enter account number:",
        },
        { type: "password", name: "pin", message: "Enter PIN:" },
    ])
        .then((answers) => {
        const account = accounts.find((acc) => acc.accountNumber === answers.accountNumber && acc.pin === answers.pin);
        if (account) {
            console.log("Login successful!");
            performATMOperation(account);
        }
        else {
            console.log("Invalid account number or PIN. Please try again.");
            main(); // Retry login
        }
    });
}
main();
