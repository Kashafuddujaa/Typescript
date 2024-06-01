import inquirer from 'inquirer';
const randomNumber = Math.floor(10000 + Math.random() * 9000);
let myBalance = 0;
let answer = await inquirer.prompt([
    {
        type: 'input',
        name: 'students',
        message: 'Enter student name',
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a valid name";
        },
    },
    {
        type: 'list',
        name: 'courses',
        message: 'Select the course to enroll',
        choices: ["Python", "Web Development", "Game Development", "Software Engineering"]
    }
]);
const tutionFee = {
    "Python": 2000,
    "Web Development": 3000,
    "Game Development": 4000,
    "Software Engineering": 5000
};
console.log(`\n Tution Fees: ${tutionFee[answer.courses]}/-\n`);
console.log(`Balance: ${myBalance}\n`);
let paymentType = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "Select payment method",
        choices: ["Cash", "Card", "UPI", "Bank Transfer"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter Amount:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a valid amount";
        },
    }
]);
console.log(`You select payment method ${paymentType.payment}`);
const tutionFees = tutionFee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount);
if (tutionFees === paymentAmount) {
    console.log(`Congratiolations! you have successfully enrolled in ${answer.courses}. \n`);
    let ans = await inquirer.prompt([
        {
            name: "confirm",
            type: "list",
            message: "Do you want to continue?",
            choices: ["view status", "Exit"]
        }
    ]);
    if (ans.confirm === "view status") {
        console.log("\n********Status********\n");
        console.log(`Student Name: ${answer.students}`);
        console.log(`Student ID: ${randomNumber}`);
        console.log(`Courses: ${answer.courses}`);
        console.log(`Fees Paid: ${paymentAmount}`);
        console.log(`Balance: ${myBalance += paymentAmount}`);
    }
    else {
        console.log("\n Exit \n");
    }
}
else {
    console.log("Invalid amount");
}
