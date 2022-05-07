/** Gyu Min (Mark) Nam PS1 Problem1.
 * Write a function that takes a string as its input and returns a new string that contains all of the
 * letters in the original string, but in reverse alphabetical order. Ignore punctuation and numbers.
 * Duplicates are fine, so 'exioi' -> 'xoiie'. Test your function using the string
 * ‘supercalifragilisticexpialidocious’.
 */

const reverseString = inputString => {
    return inputString.split('').sort().reverse().join('');
}


console.log(reverseString('exioi'));