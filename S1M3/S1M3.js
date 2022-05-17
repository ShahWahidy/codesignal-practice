//=========Demo Problem  ==========//

// You are given a two-digit integer n. Return the sum of its digits.

function solution(n) {
    let sum = 0;
    while (n) {
        digit = n % 10;
        sum += digit;
        n = (n - digit) / 10;
    }
    return sum;
}

//=========Problem 1 ==========//

// Compute the factorial of an integer n. This is commonly written as n!, which is read as "n factorial".

function solution(n) {
    let fact = 1
    for (let i = 1; i <= n; i++) {
        fact *= i
    }
    return fact
}

//=========Problem 2 ==========//

// Compute the product of all numbers from a to b, inclusive.

function solution(a, b) {
    let total = 1
    
    for (let i = a; i <= b; i ++){
        total *= i
    }
    
    return total
}

//=========Problem 3 ==========//

// Return the length of a string.

function solution(s) {
    return s.length
}




//=========Problem 4 ==========//

// Return the character at index n in a string s.

function solution(s, n) {
    if (n > s.length){
        return "none"
    }else{
        return s[n]
    }
}


//=========Problem 5 ==========//

// Return an uppercase version of the input string.

// Characters that are already uppercase remain uppercase.

// Characters that aren't letters are unchanged.

function solution(s) {
    return s.toUpperCase()
}


//=========Problem 6 ==========//

// Return true if a string is all lowercase.

// Javascript: there's no built-in for this. We have to compare the string to a lowercase version of itself created with

function solution(s) {
    if (s == s.toLowerCase()){
        return true;
    }else {
        return false;
    }
}

//=========Problem 7 ==========//

// Count the number of occurrences of a letter in a string.

function solution(s, letter) {
    let count = 0;
    
    for(let i = 0 ;  i < s.length; i ++){
        if(s[i] == letter){
            count ++
        }
    }
    
    return count;
}

//=========Problem 8 ==========//

// Given a number, return the number of digits.

function solution(n) {
    let total = String(n)
    return total.length
}

//=========Problem 9 ==========//

// Return the index of the last character in a string. If the string is empty, return -1.

function solution(s) {
    if(s.length > 0){
        return(s.length -1)
    }else{
        return - 1
    }
}

//=========Problem 10 ==========//

// Return the last character in a string. If the string is empty, return "none".


function solution(s) {
    if (s === ""){
        return "none"
    }else {
        return s.charAt(s.length - 1 )
    }
}
//=========Problem 11 ==========//

// Return true if the first and second characters in the string are equal.

function solution(s) {
    if(s[0] === s[1]){
        return true
    }else{
        return false
    }
}

//=========Problem 12 ==========//

// Return true if the first and last characters in the string are equal.


function solution(s) {
    if(s[0] === s[s.length - 1]){
       return true
   }else{
       return false
   }
}
//=========Problem 13 ==========//

// Return true if the last two characters in the string are equal.

function solution(s) {
    if(s[s.length -1 ] === s[s.length - 2]){
       return true
   }else{
       return false
   }
}
//=========Problem 14 ==========//

// Return a lowercase version of the input string.

// Characters that are already lower case remain lowercase.

// Characters that aren't letters are unchanged.


function solution(s) {
    return s.toLowerCase()
}
//=========Problem 15 ==========//

// Return true if a string is all uppercase.

// Javascript: there's no built-in for this. We have to compare the string to a lowercase version of itself created with .toUpperCase().

function solution(s) {
    if(s === s.toUpperCase()){
        return true
    } else{
        return false
    }
}


//=========Problem 16 ==========//

// For a given string, return a new string with asterisks (*) on each side of each letter.

// If the string is empty, return an empty string

function solution(s) {
    let str = ''
    for (let i = 0; i < s.length; i ++){
        const char = s[i];
        str += '*'+ char + '*'
    }
    return str;
}

//=========Problem 17 ==========//

// For a given string, return a new string with asterisks (*) on each side of each letter.

// Do not use any built-in join()-style functionality for this task.

// If the string is empty, return a single asterisks.

function solution(s) {
    let str = '*'
    for (let i = 0; i < s.length; i ++){
        const char = s[i];
        str += char + '*'
    }
    return str;
}
//=========Problem 18 ==========//

// For a given string, return the letter that's highest in the alphabet.

function solution(s) {
    let highest = s[0]
    for (let i = 1; i < s.length; i++){
        const char = s[i];
        if (char > highest) highest = char;
    }
    return highest
}


//=========Problem 19 ==========//

// Description
// Construct a string of n capital "A"s.

// You must use a loop to solve this initially. After that, you can experiment with other built-in string duplication methods

function solution(n) {
    let str = '';
    for(let i = 0; i < n; i ++){
        str += 'A'
    }
    return str;
}

//=======OR=========//
function solution(n) {
    return Array(n).fill('A').join('')
}

//========= End  ==========//

