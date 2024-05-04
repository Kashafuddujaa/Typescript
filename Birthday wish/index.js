#! /usr/bin/env code
import inquirer from 'inquirer';
import moment from 'moment';
// Function to calculate days until next birthday
function daysUntilNextBirthday(birthday) {
    const today = moment();
    const nextBirthday = moment(birthday).year(today.year());
    if (nextBirthday.isBefore(today)) {
        nextBirthday.add(1, 'year');
    }
    return nextBirthday.diff(today, 'days');
}
// Function to check if it's the user's birthday
function isBirthday(birthday) {
    const today = moment();
    const birthdayMoment = moment(birthday);
    return today.month() === birthdayMoment.month() && today.date() === birthdayMoment.date();
}
// Function to display birthday message with personalized messages for specific names
function birthdayMessage(name, birthday) {
    const age = moment().diff(birthday, 'years');
    // Personalized message
    if (name.toLowerCase() === 'mustafa') {
        return `Happy Birthday you idiot!🎉Another year older, but are you any wiser?😛 Don't forget the golden rule: birthday person gives the treat!`;
    }
    // Birthday message
    return `Hey ${name}, Happy Birthday! 🎉🎂 You are ${age} years old.`;
}
// Function to display days until next birthday
function daysUntilBirthdayMessage(days) {
    return `There are ${days} days remaining until your birthday.`;
}
// ASCII art for birthday cake with candles and flames
const birthdayCakeAsciiArt = `

iiii
|:H:a:p:p:y:|
__|___________|__
|^^^^^^^^^^^^^^^^^|
|:B:i:r:t:h:d:a:y:|
|                 |
~~~~~~~~~~~~~~~~~~~
`;
// Main function to ask user for input
async function main() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What's your name?",
        },
        {
            type: 'input',
            name: 'birthdate',
            message: "What's your date of birth? (YYYY-MM-DD)",
            validate: (input) => {
                const pattern = /^\d{4}-\d{2}-\d{2}$/;
                if (!pattern.test(input)) {
                    return 'Please enter a valid date in the format YYYY-MM-DD.';
                }
                return true;
            },
        },
    ]);
    const birthday = new Date(answers.birthdate);
    const name = answers.name;
    const daysUntilBirthday = daysUntilNextBirthday(birthday);
    if (isBirthday(birthday)) {
        console.log(birthdayCakeAsciiArt);
        console.log(birthdayMessage(name, birthday));
    }
    else {
        console.log(daysUntilBirthdayMessage(daysUntilBirthday));
    }
}
// Run the main function
main();
