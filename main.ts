import { write } from "fs";
import inquirer from "inquirer";


let myBalance = 5000;
let myPin = 1234;
// print welcome message
console.log("Welcome to Code With Shoaib - ATM Machine");

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code"
    }
])
if(pinAnswer.pin === myPin){
 console.log("Pin is Correct , Login Successfully");
// console.log(`Current Account Blance is ${myBalance}`)

let operationAns = await inquirer.prompt([
    {
        name: "operation",
        type: "list",
        message: "Select an operation",
        choices: ["Withdraw Amount", "Check Balance"]
    }
])
if(operationAns.operation === "Withdraw Amount"){
    let withdrawAns = await inquirer.prompt([
        {
            name: "withdrawMethod",
            type: "list",
            message: "Select a withdrawal method",
            choices: ["Fast Cash", "Enter Amount"]
        }
    ])
    if(withdrawAns. withdrawMethod === "Fast Cash"){
        let FastCashAns = await inquirer.prompt([
            {
                name: "FastCash",
                type: "list",
                message: "Select Amount:",
                choices: [1000, 2000, 5000, 10000, 20000, 50000]
            }
        ])
        if(FastCashAns.FastCash > myBalance ){
            console.log("insufficient Balance");
        }
        else{
            myBalance -= FastCashAns.FastCash
            console.log(`${FastCashAns.FastCash} withdraw Successfully`);
            console.log(`Your Remaining Balance is: ${myBalance}`);
        } 
    }

   else if(withdrawAns. withdrawMethod === "Enter Amount"){
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to withdraw",
            }
        ])
        if(amountAns.amount > myBalance){
            console.log("Insufficent Balance");
        }
        else{
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} Withdraw Successfully`);
            console.log(`Your Remaining Balance is: ${myBalance}`);
        }
    }

}
else if (operationAns.operation === "Check Balance"){
console.log(`Your Account Balance is:${myBalance}`)
}
}
else{
    console.log("Pin is Incorrect, Try Again");
}
