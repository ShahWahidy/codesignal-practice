//=========Problem 1 ==========//

// Write a function that returns the length of an array.

function solution(a) {
    return a.length;
}

//=========Problem 3 ==========//

// This function accepts an array and an index.

// It should return the value at that index.

// If the index is out of range, it should return -999. (Out of range means less than 0 or greater than the maximum index of the array.)

function solution(a, index) {
    if(index <0 || index >= a.length){
        return -999
    }
    return a[index]
}


//=========Problem 3 ==========//

// Write a function that prepends front and appends back to an array.


function solution(a, front, back) {
    a.push(back);
    a.unshift(front);
    
    return a;
}

//=========Problem 4 ==========//

// Write a function that deletes a value from an array a at index.

function solution(a, index) {
    a.splice(index, 1)
    
    return a;
}

//=========Problem 5 ==========//

// Given a number, return the number of digits.

function solution(n) {
    let len = 0;
     for(let i = 0; i < n ||  n == 1 ; i++){
        n = Math.trunc(n/10);
        len++;
     }
      return len + 1;
}
  //OR//
  
function solution (n) {
    return n.toString().length;
}
//=========Problem 6 ==========//

// This function should start computing the product of

// x * (x+1) * (x+2) * (x+3) * ...

// until the product becomes evenly divisible by 7. Then it should stop and return the product.

// If x is already divisible by 7, just return x.

function solution(x) {
    let answer = 1; 
        
    while ( answer % 7 !== 0){
        answer *= x // answer = asnwer * x 
        x++
    
    }    
    return answer
}

//=========Problem 7 ==========//

// Write a function that chops off the beginning and end of an array and puts them in a new array.

// An array containing the original array and the new array should be returned.

function solution(a) {
    const newArr = [a.shift(),a.pop()]
    return [a, newArr]
}

//=========OR=====/
function solution(a) {
    let first = a.shift()
    let last = a.pop()
    let newArray = [[...a], [first, last]]
    return newArray;
}

//=========Problem 8 ==========//

// Write a function that inserts a new value in the middle of an array.

// The middle index is the length of the array divided by 2, rounded down.

function solution(a, x) {
    a.splice((a.length/2), 0, x )
    
    return a;
}
//=========Problem 9 ==========//

// This function accepts an array and a value to search for. It should return true if the value occurs anywhere in the array.

function solution(a, v) {
    if(a.includes(v)){
        return true;
    }else{
        return false;
    }

}

//=====OR====//
function solution(a, v) {
    let flag = false
    for (let i = 0; i < a.length; i++){
        if(a[i] === v) flag = true
    }
    
    return flag;
}

//=========Problem 10 ==========//

// This function accepts an array. It should return an array with members that are equal to those in the original array multiplied by 2.

// You can modify the existing array and return it, or construct a new one.

// If the input array is empty, an empty array should be returned.

function solution(a) {
    if(a.length <= 0 ){
        return a;
    }else{
        return a.map(x => x * 2)
    }
}


//=========Problem 11 ==========//

// This function accepts an array. It should return the sum of all elements in the array.

// If the input array is empty, return 0.

function solution(a) {
    let sum = 0;
    if (a.length <=0){
        return sum;
    }else{
        sum = a.reduce((acc, x) => acc + x, 0)
    }
    return sum
}
//=========Problem 12 ==========//

// Construct a string of n capital "A"s followed by a string of m capital "B"s.

function solution(n, m) {
    let as = Array(n).fill('A').join('');
    let bs = Array(m).fill('B').join('');
    let str = (as + bs);
    
    return str;
    
}

//======OR=========//
function solution(n, m) {
    return Array(n).fill('A').join('') + Array(m).fill('B').join('')
}

//=========Problem 13 ==========//

// Construct a string made from every other character in the input string.

// The first character of the input string will be the first character in the output string.

// If the input string is empty, return an empty string

function solution(s) {
    let newString = '';
    
    if (s.length === 0) return '';
    
    for(let i = 0; i < s.length; i+=2) {
        newString += s[i]
        }
    return newString;
 }
//=========Problem 14 ==========//

// Construct a string made from every other character in the input string, excluding vowels.

// The first character of the input string will be the first character in the output string.

// If the input string is empty, return an empty string

function solution(s) {
    let newString = '';
    
    if (s.length === 0) return '';
    
    for(let i = 0; i < s.length; i+=2) {
        if (notVowelOrCap(s[i])) newString += s[i]
     }
        return newString;
    }
    
    function notVowelOrCap(char){
        if(char === char.toUpperCase()) return false;
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ) return false;
        return true;
    }
//=========Problem 15 ==========//

    /// Same as 14 ///

//=========Problem 16 ==========//

// Given a number and a field width, return a string with that number padded with leading zeros.

// The field width is the total number of digits in the result string, not the number of zeros.

// If the width is smaller than the number of digits in the n, return a string containing only n.

function solution(n, width) {
    let m = String(n)
    let dif = width - m.length
    
    if ( dif > 0){
        let zeros = Array(dif).fill('0').join('')
        return zeros + m
    } else {
        return m
    }  
    
}

//=========Problem 17 ==========//

// Construct a string of p copies of n capital "A"s and m capital "B"s.

function solution(p, n, m) {
    const as = Array(n).fill('A').join('')
    const bs = Array(m).fill('B').join('')
    
    return Array(p).fill(as + bs).join('')
}
