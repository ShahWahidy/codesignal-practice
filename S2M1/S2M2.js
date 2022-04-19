//=========Problem 1 ==========//

Return true if a string is a palindrome.

A palindrome is a word that is spelled the same forward and backward.

An empty string is a palindrome.

function solution(s) {
    return s == s.split('').reverse().join('');
}

//=========Problem 2 ==========//\

Return a number with its digits reversed.

The return value should be an integer.

function solution(n) {
    const num = String(n).split('').reverse().join('')
    return parseInt(num)
}

//=========Problem 3 ==========//

This function accepts an array. It should return true if the array elements read the same forward and backward, i.e. if the array is a palindrome.

An empty array is a palindrome. // partial passing test

function solution(arr) {
    const len = arr.length;
    if (len % 2 == 0) return false;

    for (let i = 0; i < len / 2; i++) {
        if (arr[i] !== arr[len - i - 1]) return false;
    }
    return true;
}

//=========Problem 4 ==========//

Given an input array a determine the length of the leading "run" of numbers. The run is how many numbers at the front of the array are the same.

If the array is empty, return 0.

function solution(a) {
    let leadingRun = a[0];
    let leadingRunCount = 0;
    
    if(a.length === 0) return 0
    
    for(let i = 0; i < a.length; i ++){
        if(a[i] === leadingRun){
            leadingRunCount++
        } else {
            break;
        }
    }
    
    return leadingRunCount;
}
//=========Problem 5 ==========//

Return a slice of array a starting from index start and ending before index end.

If end is less than or equal to start, return an empty array.

Note that start and end could be beyond the length of the array. They should be clamped between 0 and the length of the array minus 1.


function solution(a, start, end) {
    return a.slice(start, end)
}
//=========Problem 6 ==========//

Examine an array and determine the length of the longest run of elements. That is, the most of a particular element seen in a row.
// Partialy passing

function solution(a) {
    let runNum = a[0]
    let run = 0
    for(let i = 0; i < a.length; i ++){
        if(a[i] === runNum || a[i] === a[i + 1]){
            run++
        }
    }
    return run;
}
//=========Problem 7 ==========//

Run-length encoding algorithm (RLE) works by taking the occurrence of each repeating character and outputting that number along with a single character of the repeating sequence.

You need to implement an algorithm that applies the RLE to a given string.

function solution(inputString) {
    let curentLetter = inputString[0]
    let count = 1
    let sol = ''
    
    for(let i = 1; i < inputString.length; i++){
        const letterThatWeAreOn = inputString[i]
        if( letterThatWeAreOn === curentLetter) count++
        else {
            sol += count + curentLetter
            count = 1
            curentLetter = letterThatWeAreOn;
        }
    }
    sol += count + curentLetter
    return sol;
}

