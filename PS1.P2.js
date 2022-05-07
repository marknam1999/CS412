/** Gyu Min (Mark) Nam PS1 Problem2
 * Write a function that takes as its input the following formatted strings:
 * ‘4+2’
 * ‘5*7’
 * ‘6-1’
 * ‘9/2’
 * ‘2^8’ (where ^ is exponentiation)
 * This function should
 * Determine the operator (+, *, -, ^, or /) embedded in the string
 * Return a function to implement the input operator that returns the result
 * For example, if the input string is ‘8%3’, return (left, right) => left % right
 * Execute the returned function to evaluate and print each expression. For example,
 */

const evaluate = exp => {
    switch (exp.charAt(1)){
        case '+':
            return (exp) => Number(exp.charAt(0)) + Number(exp.charAt(2))
        case '-':
            return (exp) => Number(exp.charAt(0)) - Number(exp.charAt(2))
        case '*':
            return (exp) => Number(exp.charAt(0)) * Number(exp.charAt(2))
        case '/':
            return (exp) => Number(exp.charAt(0)) / Number(exp.charAt(2))
        case '^':
            return (exp) => Number(exp.charAt(0)) ** Number(exp.charAt(2))
    }
}

const expression1 = '4+2';
const expression2 = '5*7';
const expression3 = '6-1';
const expression4 = '9/2';
const expression5 = '2^8';

let operator1 = evaluate(expression1);
console.log(`${expression1} = ${operator1(expression1)}`)

let operator2 = evaluate(expression2);
console.log(`${expression2} = ${operator2(expression2)}`)

let operator3 = evaluate(expression3);
console.log(`${expression3} = ${operator3(expression3)}`)

let operator4 = evaluate(expression4);
console.log(`${expression4} = ${operator4(expression4)}`)

let operator5 = evaluate(expression5);
console.log(`${expression5} = ${operator5(expression5)}`)

