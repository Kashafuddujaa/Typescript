#! /usr/bin/env node
import inquirer from "inquirer";


const currencies: any = {
    USD: 1, //base currency
    EUR: 0.91,
    GBP: 0.76,
    PKR: 280,
    INR: 74.57
}



let answer = await inquirer.prompt([{
    message: "Choose the currency you want to convert. (Type 'exit' to quit)",
    name: "from",
    type: "list",
    choices: ['PKR', 'USD','EUR', 'GBP', 'INR']
},
    {
        message: "Enter the currency you want to convert in",
        name: "to",
        type: "list",
        choices: ['PKR', 'USD', 'EUR', 'GBP', 'INR']
},
    {
        message: "Enter Your Amount",
        name: "amount",
        type: "number",
  },
])

let fromAmount = currencies[answer.from]// exchange rate
let toAmount = currencies[answer.to] // exchange rate
let numAmount = answer.amount
if(isNaN(numAmount)){
    console.log("Please enter a valid number")
}
let baseAmount = numAmount / fromAmount // usd base currency
let convertedAmount = baseAmount * toAmount // converted usd into euro


console.log(convertedAmount);
