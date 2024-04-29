#! /usr/bin/env node
import inquirer from 'inquirer';

let isFriend = await inquirer.prompt([{
    name: "name",
    type: "string",
    message: "Enter Your Friend's name"
}])
if (isFriend.name === "Mustafa" || isFriend.name === "Fatima" || isFriend.name === "Ayesha"){
    console.log(`${isFriend.name} is your friend`);
} else {
    console.log(`${isFriend.name} is not your friend`);
}