const chalk = require('chalk')

function calculadora(n1, n2, op)
{
    switch(op){

        case '+':
        return(chalk.bgCyanBright.white(`${n1} ${op} ${n2} = ${(n1+n2)}`))

        case '-':
        return(chalk.bgRedBright.white(`${n1} ${op} ${n2} = ${(n1-n2)}`))

        case '*':
            return(chalk.bgMagentaBright.white(`${n1} ${op} ${n2} = ${(n1*n2)}`))

        case '/':
            return(chalk.bgMagenta.white(`${n1} ${op} ${n2} = ${(n1/n2)}`))

        default:
            return(chalk.bgRed.yellow(`ìnvalid operation`))


    }

   /* if(op === "+")
    {
        return(chalk.bgCyanBright.white(`${n1} ${op} ${n2} = ${(n1+n2)}`))
    }
    else if (op === "-")
    {
        return(chalk.bgBlue.white(`${n1} ${op} ${n2} = ${(n1-n2)}`))
    }
    else if (op === "*")
    {
        return(chalk.bgMagenta.white(`${n1} ${op} ${n2} = ${(n1*n2)}`))
    }
    else if (op === "/")
    {
        return(chalk.bgGreen.white(`${n1} ${op} ${n2} = ${(n1/n2)}`))
    }
    else 
    {
        return(chalk.bgRed.yellow(`ìnvalid operation`))
    }
    */
}

    console.log(calculadora(135, 61, "+"))
    console.log(calculadora(135, 61, "-"))
    console.log(calculadora(15, 5, "*"))
    console.log(calculadora(144, 12, "/"))
    console.log(calculadora(32, 6, "|"))
