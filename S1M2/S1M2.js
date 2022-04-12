//=========Problem 2 ==========//

// Write a function that converts a string to an integer.

// JavaScript: you can do the conversion with the parseInt() function.
// Python: you can do this conversion with the int() function.

function solution(s) {
    return  parseInt(s)
}

//=========Problem 2 ==========//

// Write a function that converts a floating point number to a string.

// JavaScript: you can do the conversion with the String() function.
// Python: you can do this conversion with the str() function.

function solution(f) {
    return String(f)
}

//=========Problem 3 ==========//

// Write a function that converts an integer to a floating point number.

// JavaScript: you can do the conversion with the parseFloat() function.
// Python: you can do this conversion with the float() function.

function solution(i) {
    return parseFloat(i)
}

//=========Problem 4 ==========//

// Write a function that converts a floating point number to a string with a specific number of digits past the decimal place.

function solution(f, places) {
    return f.toFixed(places)
}


//=========Problem 5 ==========//

// Write a function that computes the absolute value of a number.


function solution(x) {
    if (x < 0){
        return x * ( -1 )
    } else {
        return x
    }
}


//=========Problem 6 ==========//

// Write a function that returns true if a number is between 2 and 7, exclusive. (That is, between 3 and 6, inclusive.)

function solution(n) {
    if (n >= 3 && n <= 6 ) {
        return true
    } else {
        return false
    }
}



//=========Problem 7 ==========//

// Write a function that converts an integer to a string.

// JavaScript: you can do the conversion with the String() function.
// Python: you can do this conversion with the str() function.
// The integer could be negative, but the built-in conversion function should handle this.

function solution(i) {
    return String(i)
}

//=========Problem 8 ==========//

// Write a function that converts a floating point number to an integer.

// JavaScript: you can do the conversion with the parseInt() function.
// Python: you can do this conversion with the int() function.
// The digits past the decimal point will be dropped.

function solution(f) {
    return parseInt(f)
}


//=========Problem 9 ==========//

// Write a function that converts a string to a floating point number.

// JavaScript: you can do the conversion with the parseFloat() function.
// Python: you can do this conversion with the float() function.
// The string will contain a valid floating point number, positive or negative.

function solution(s) {
    return parseFloat((s))
}

//=========Problem 10==========//

// Normally, dividing by zero is a bad thing that will cause programs to crash. Write a safer division function
// that returns the division of two numbers (the numerator divided by the denominator) unless the denominator is 0, in which case it should return 0 instead of crashing.

function solution(numerator, denominator) {
    if (denominator === 0){
        return 0
    } else {
        return numerator / denominator
    }
}


//=========Problem 11==========//

// Return the larger of two numbers.

// If they're the same, return either one.

function solution(a, b) {
    if( a === b || a > b){
        return a
    } else {
        return b
    }
}

//=========Problem 12==========//

// Return the larger of two characters.

// For example, "c" is larger than "a" because "c" comes later in the alphabet.

// If the characters are the same, return either one.

// This can be done with a regular comparison operator like < or >.

// Entire strings can be compared this way. The results are in lexicographical order, which you can think of as alphabetical order, except it includes other characters.

function solution(a, b) {
    if( a === b || a > b){
      return a
  } else {
      return b
  }
}


//=========Problem 13==========//
// This function will analyze its input and return a string based on it.

// If the input is 0, return "none".
// If the input is 1, return "one".
// If the input is 2, return "two".
// If the input is anything else, return "some".

function solution(n) {
    if(n === 0){
        return "none"
    }else if(n === 1){
        return "one"
    }else if(n === 2){
        return "two"
    }else{
        return "some"
    }
}

//=========Problem 14==========//

// const solution = (x) => Math.abs(x)
// Return the larger of three numbers.

// If they're all the same, return any one.

function solution(a, b, c) {
    if( a === b && b === c){
        return a
    } else if ( a > b && a > c){
        return a
    } else if ( b > c && b > a){
        return b
    } else {
        return c
    }
}


//=========Problem 15==========//

// Return the largest of six numbers.

// Do not use any built-in maximum value function to solve this!

// There could be ties for largest.

function solution(a, b, c, d, e, f) {
    const numbers = [a,b,c,d,e,f]
    let highestNum = - Infinity
    for (let i = 0; i < numbers.length; i ++){
        if (numbers[i] > highestNum) {
            highestNum = numbers[i]
        }
    }
    return highestNum
}

// function solution(a, b, c, d, e, f){
//     return Math.max(a, b, c, d, e, f)
// }


//=========Problem 16==========//

// This function will run a set of tests on three numbers. If the test passes, the function will return the string "OK". Otherwise it returns "NOK".

// The test passes if:

// a is greater than b AND
// b is less than or equal to c AND
// One of more of the following is true:
// a * 3 is greater than c OR
// c is less than or equal to a

function solution(a, b, c) {
    if ((a > b  && b <=c) && ((a *3) > c || c <= a)){
        return "OK"
    }
    else{
        return "NOK"
    }
}


//=========Problem 17==========//

// Write a function that takes an amount to withdraw from an account, along with the current balance.

// If there isn't enough in the account to make the withdrawal, return -1. Otherwise return the remaining balance after the withdrawal.

function solution(amount, balance) {
    if (amount > balance){
        return -1
    }else {
        return balance - amount 
    }
}