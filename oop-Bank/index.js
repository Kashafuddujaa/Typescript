import inquirer from "inquirer";
// Bank Account class
class BankAccount {
    accountNumber;
    balance;
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    // Debit
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`Withdrawal of $${amount} successful. Remaining balace is $${this.balance}`);
        }
        else {
            console.log("Insufficient Balance.");
        }
    }
    // Credit
    deposit(amount) {
        if (amount > 100) {
            amount -= 1; // $1 fee charged if more than $100 is deposited
        }
        this.balance += amount;
        console.log(`Deposit of $${amount} successful.Remaining Balance is $${this.balance}`);
    }
    // CHECK BALANCE
    checkBalance() {
        console.log(`Current Balance: $${this.balance}`);
    }
}
// Customer class
class Customer {
    firstName;
    lastName;
    gender;
    age;
    mobileNumber;
    account;
    constructor(firstName, lastName, gender, age, mobileNumber, account) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.mobileNumber = mobileNumber;
        this.account = account;
    }
}
// Create Bank Accounts
const accounts = [
    new BankAccount(1001, 500),
    new BankAccount(1002, 1500),
    new BankAccount(1003, 2500)
];
// Create customers
const customers = [
    new Customer("Mustafa", "Ahmed", "Male", 23, 3165930937, accounts[0]),
    new Customer("Kashaf Ud Duja", "Ahmed", "Female", 18, 3249750742, accounts[1]),
    new Customer("Hannan", "Ahmed", "Male", 26, 6074532178, accounts[2])
];
//Function to interact with bank account
async function service() {
    do {
        const accountNumberInput = await inquirer.prompt([
            {
                name: "accountNumber",
                type: "number",
                message: "Enter your account number:"
            }
        ]);
        const customer = customers.find(customer => customer.account.accountNumber === accountNumberInput.accountNumber);
        if (customer) {
            console.log(`Welcome ${customer.firstName} ${customer.lastName}\n`);
            const answer = await inquirer.prompt([
                {
                    name: "select",
                    type: "list",
                    message: "Select any operation",
                    choices: ["Deposit", "Withdraw", "Check Balance", "Exit"]
                }
            ]);
            switch (answer.select) {
                case "Deposit":
                    const depositAmount = await inquirer.prompt({
                        name: "amount",
                        type: "number",
                        message: "Enter the amount you want to deposit:"
                    });
                    customer.account.deposit(depositAmount.amount);
                    break;
                case "Withdraw":
                    const withdrawAmount = await inquirer.prompt({
                        name: "amount",
                        type: "number",
                        message: "Enter the amount you want to withdraw:"
                    });
                    customer.account.deposit(withdrawAmount.amount);
                    break;
                case "Check Balance":
                    customer.account.checkBalance();
                    break;
                case "Exit":
                    console.log("Exiting bank program...");
                    console.log("\n Thankyou for using our application. Have a nice day!");
                    return;
            }
        }
        else {
            console.log("Invalid Account Number. Please enter correct account number");
        }
    } while (true);
}
service();
