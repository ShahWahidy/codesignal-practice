//=========Problem 1 ==========//\

// Construct a string of p copies of n capital "A"s and m capital "B"s.

// Except if the copy number is evenly divisible by 3, in which case insert a string of p capital "X"s instead.

// Copy numbers begin with 0 for the first copy.


// //=========Problem 2 ==========//

// Return a reversed version of a string.

// If the string is empty, return an empty string.

function solution(s) {
    if(s.length > 0){
        return [...s].reverse().join("");
    } else {
        return '';
    }
}

//=========Problem 3 ==========//

This function accepts a string. It should return an array where each element is a single letter in the string, in the same order.

If the input string is empty, return an empty array.

function solution(s) {
    if(s.length > 0){
        return s.split("");
    } else{
        return '';
    }
}

//=========Problem 4 ==========//

Return the number of occurrences of v in array a.

If the array is empty, return 0.
//=========Problem 5 ==========//

function solution(a, v) {
    let occur = 0;
    
    if (a.length > 0){
        for (let i= 0; i < a.length ; i ++){
            if(a[i] == v){
                occur++
            }
        }
        
    } else{
        return '';
    }
    
    return occur;
}
//=========Problem 5 ==========//

Return true if two arrays are equal.

The arrays are equal if they are the same length and contain the same value at each particular index.

Two empty arrays are equal.

function solution(a, b) {
    if(a.length === b.length || (checkIndex(a,b))){
        return true;
    }else {
        return false;
    }
     
 }
 
 // ==== below code will get some tests passed === //
 
 function checkIndex (a, b){
     same = false;
      
      for(let i = 0; i < a.length; i++){
         if(a[i] === b[i]){
             same = true; 
         } else{ 
             same = same
         }
         
     }
     return same
 }
//=========Problem 6 ==========//

Given an array and a value x, return an array with all the elements of the original except those with value x.

function solution(a, x) {
 
    return a.filter(i => i !== x);
 
}
//=========Problem 7 ==========//

Given an input array a and a second array, filter_array, produce a new array that contains only the elements of a that are not in filter_array.

The elements in the result array should be in the same order that they appeared in array a.


function solution(a, filter_list) {
    const filterd = a.filter(list => !filter_list.includes(list));
    
    return filterd;
}
//=========Problem 8 ==========//

Produce an array of n strings.

Each string will contain m uppercase "A"s.


function solution(n, m) {
    let result = [];
    let str = "A"
    for(let i = 0; i < n; i ++){
       result.push(str.repeat(m))
    }
    return result
}

//=========Problem 10 ==========//
//=========Problem 11 ==========//
//=========Problem 12 ==========//