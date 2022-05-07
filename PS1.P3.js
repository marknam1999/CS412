/** Gyu Min (Mark) Nam PS1 Problem3
 * Write a function that accepts two input parameters: a string, and a decorator function. The
 * function should execute the passed decorator function on the passed string and return the
 * result.
 * Next, write two expressions that call this function. For the first, pass the string
 * ‘supercalifragilisticexpialidocious’ and a lambda (unnamed) function that returns an array
 * containing fragments of the input string broken on the character ‘c’. For the input string
 * ‘supercalifragilisticexpialidocious’, you should get
 * [‘super’, ‘califragilisti’, ‘cexpialido’, ‘cious’]
 * This is actually a little tougher than it sounds…a hint would be to take a look at how bit/
 * character stuffing is done in networking.
 * For the second expression, pass the string ‘supercalifragilisticexpialidocious’ and a lambda
 * function that replaces all of the ‘a’ characters with ‘A’ characters. Return an object that
 * contains the original string, the modified string, the total number of As in the modified string,
 * and the overall length of the modified string:
 * {
 * 	 	 originalString: xxx,
 * 	 	 modifiedString: xxx,
 * 	 	 numberReplaced: xxx,
 * 	 	 length:		 	 xxx,
 * }
 * Print the data from the returned object on the console (console.table would be good for this).
 */
const inputString = 'supercalifragilisticexpialidocious';

const initializer = (input,decorator) => decorator(input);


const expression1 = initializer(inputString, exp1 => {
    return exp1.replace(/c/g, "HEREc").split('HERE')
});

const expression2 = initializer(inputString, exp2 => {
    let final = {
        originalString: exp2,
        modifiedString: exp2.replace(/a/g,'A'),
        numberReplaced: exp2.match(/a/g).length,
        length: exp2.length
    }
    return final
})

console.log(expression1);
console.log(expression2);