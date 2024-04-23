#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgGrey.black("Welcome to Currency Converter, By one of Farooque Ahmed🤩"));
console.log(chalk.bgGrey.black("This tool will convert any currency to any one.\n"));
let Currency = {
    Dollar: 1, // Base Currency
    GBP: 0.8,
    PKR: 280,
    INR: 83.30,
    EURO: 0.92
};
let UserAnswer = await inquirer.prompt([{
        name: "from",
        message: (chalk.cyan("Please select the currency to convert:")),
        type: "list",
        choices: ["Dollar", "GBP", "PKR", "INR", "EURO"]
    },
    {
        name: "to",
        message: (chalk.blue("Select the currency which you want to convert it :")),
        type: "list",
        choices: ["Dollar", "GBP", "PKR", "INR", "EURO"]
    },
    {
        name: "amount",
        message: (chalk.green("Please enter the amount you want to convert:")),
        type: "number"
    }
]);
// console.log(UserAnswer);
let FromAmount = Currency[UserAnswer.from];
let ToAmount = Currency[UserAnswer.to];
let Amount = UserAnswer.amount;
let BaseAmount = Amount / FromAmount;
let FinalAmount = BaseAmount * ToAmount;
// console.log(FromAmount);
// console.log(ToAmount);
// console.log(Amount);
// console.log(BaseAmount);
console.log(`\nConversion successful!`);
console.log(chalk.yellow(`${UserAnswer.amount} ${UserAnswer.from} = ${FinalAmount.toFixed(2)} ${UserAnswer.to}`));
console.log(chalk.magenta("\nThank you for using Farooq's Currency Converter!"));
