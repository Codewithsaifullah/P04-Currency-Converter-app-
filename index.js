#! usr/bin/env node
import inquirer from "inquirer";
let conversion = {
    PKR: {
        USD: 0.0036,
        GBP: 0.0028,
        PKR: 1,
    },
    GBP: {
        USD: 1.27,
        PKR: 354.15,
        GBP: 1,
    },
    USD: {
        GBP: 0.79,
        PKR: 278.55,
        USD: 1,
    },
};
const answers = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "GBP", "USD"],
        message: "Please enter your conversations",
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "GBP", "USD"],
        message: "Please enter your Currency conversions",
    },
    {
        type: "number",
        name: "amount",
        message: "Please enter your Conversion Amount",
    },
]);
const { from, to, amount } = answers;
if (from && to && amount) {
    let result = conversion[from][to] * amount;
    console.log(`Your conversion from ${from} to ${to} is ${result}`);
}
else {
    console.log("Please enter valid inputs");
}
console.log("Thank you for using this app \n Made by Saifullah");
