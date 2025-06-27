import readline from "readline-sync";
import chalk from "chalk"
function main(){
    // console.log("Hello")
    // let fname=readline.question("Enter Your First Name: ");
    // let lname=readline.question("Enter Your Last Name: ");
    // let age=readline.questionInt("Enter Your Age: ");
    // let city=readline.question("Enter Your City: ");
    console.log(chalk.bgMagenta("============InstaGram Login==============="));
    console.log(chalk.bgCyanBright("===========Login To Use Instagram============="));
    let email=readline.questionEMail(chalk.bgBlue("Enter Your email: "));
    let password=readline.question("Enter your password: ",{
        hideEchoBack: true
    })
    console.log(chalk.bgRedBright("Email:",email),chalk.bgBlueBright.bold("Password:",password));
}
main()