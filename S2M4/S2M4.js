//=========Problem 1 ==========//

Write a function that processes an input array, returning an array with the difference between each two subsequent elements.

For example, if the first two elements in the input are 10 and 6 and 15, then the first two elements in the output will be 4 and -9. (Because 10-6=4 and 6-15=-9.)

Note that the output array will have one fewer elements than the input.

function solution(a) {
    windowsSize = 2
    const results = []
    
    for (let i = 0; i <= a.length - windowsSize; i++){
        const first = a[i]
        const second = a[i + 1]
        const difference = first - second
        results.push(difference)
    }
    return results;
}

//=========Problem 2 ==========//

Write a function that moves a "window" over an array, processing the values under the window as it goes.

For example, a window of size 3 moving across an array of length 9 might look like this for the first 3 moves (window is the bar over the values):

 _____
 6 2 8 3 7 9 1 0 5    Window over 6,2,8

   _____
 6 2 8 3 7 9 1 0 5    Window over 2,8,3

     _____
 6 2 8 3 7 9 1 0 5    Window over 8,3,7
And the last window in that example would be 1,0,5.

Your goal is to return an array of true/false values. True if all the numbers under the window are odd (not evenly divisible by 2), otherwise false.

Try to do this without creating any new arrays except for the True/False result array.


function solution(a, window_size) {
    const results = [];
    for(let i = 0; i <= a.length - window_size; i ++){
        let allOdds = true;
        for(let j = i; j < i + window_size; j++){
            const number = a[j]
            if( number % 2 === 0 ) {
                allOdds = false
                break;
            }
        }
        results.push(allOdds)
    }
    return results;
}

//=========Problem 3 ==========//

Write a function that moves a "window" over an array, processing the values under the window as it goes.

For example, a window of size 3 moving across an array of length 9 might look like this for the first 3 moves (window is the bar over the values):

 _____
 6 2 8 3 7 9 1 0 5    Window over 6,2,8

   _____
 6 2 8 3 7 9 1 0 5    Window over 2,8,3

     _____
 6 2 8 3 7 9 1 0 5    Window over 8,3,7
Your goal is to return an array of averages of the values under the window as it moves.


function solution(a, window_size) {
    const averages = [];
    for (let i = 0; i <= a.length - window_size; i++){
        let total = 0;
        for (let j = i; j < i + window_size; j++){
            total += a[j]
        }
        const average = total / window_size
        averages.push(average)
    }
    return averages;
}
//=========Problem 4 ==========//

You are given an array of integers a. Your task is to calculate how many numbers in the array are equal to the arithmetic mean of their immediate neighbors.

In other words, count the number of indices i such that a[i] = (a[i - 1] + a[i + 1]) / 2.

Note: If a[i - 1] or a[i + 1] don't exist, they should be considered equal to 0.

function solution(a) {
    let count = 0 
    for(let i = 0; i < a.length; i ++){
        const current = a[i]
        const before = a[i - 1] || 0
        const after = a[i + 1] || 0
        const average = (before + after) / 2
        if (average === current) count ++
    }
    return count
}
//=========Problem 5 ==========//

Avoid using built-in functions to solve this challenge. Implement them yourself, since this is what you would be asked to do during a real interview.

Implement a function that takes two strings, s and x, as arguments and finds the first occurrence of the string x in s. The function should return an integer indicating the index in s of the first occurrence of x. If there are no occurrences of x in s, return -1.

function solution(s, x) {
    return s.indexOf(x)
}

//=========Problem 6 ==========//

Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

function solution(s) {
    const letterCount = {}
    for(let i = 0; i < s.length; i++){
        const char = s[i]
        if(char in letterCount) letterCount[char]++
        else letterCount[char] = 1
    }
    for (let key in letterCount) {
        if(letterCount[key] === 1) return key
    }
    return '_'
}
//=========Problem 7 ==========//

You're given an array of integers a. Let's call (a[i - 1], a[i], a[i + 1]) a good tuple, if exactly 2 out of the 3 numbers in it are equal. For example, (2, 1, 2) is a good tuple, but (1, 1, 1) and (1, 2, 3) are not.

Your task is to return the number of good tuples in a.

Note: The tuples may be overlapping.

function solution(a) {
    let count = 0;
    for (let i = 0; i <= a.length - 3; i++){
        let one = a[i]
        let two = a[i + 1]
        let three = a[i + 2 ]
        
        if (one === two && one !== three) count++
        else if (one === three && one !== two) count++
        else if (two === three && two !== one) count++
    }
    
    return count;
}

//=========Problem 8 ==========//

You have a string s. Split s into the minimum possible number of increasing substrings. A substring is considered to be increasing when the next symbol in the substring is also next in the English alphabet. This is case sensitive, i.e. 'b' is next for 'a' but 'C' is not next for 'b'. Return an array of these substrings.

function solution(s) {
    let str = s[0]
    let sol = []
    for (let i = 1; i < s.length; i ++){
        const lastCharInStr = str[str.length-1]
        const currentChar = s[i]
        const ccLCIS = lastCharInStr.charCodeAt(0)
        const ccCC = currentChar.charCodeAt(0);
        if (ccCC -1 === ccLCIS) str += currentChar
        else {
            sol.push(str)
            str = currentChar
        }
    }
    sol.push(str)
    return sol
}