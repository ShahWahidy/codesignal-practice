//=========Problem 1 ==========//\

// Construct a string of p copies of n capital "A"s and m capital "B"s.

// Except if the copy number is evenly divisible by 3, in which case insert a string of p capital "X"s instead.

// Copy numbers begin with 0 for the first copy.

function solution(p, n, m) {
    const As = Array(n).fill('A').join("")
    const Bs = Array(m).fill('B').join("")
    const Xs = Array(p).fill('X').join('')
    let str = ''
    
    for (let i = 0; i < p; i ++){
     if ( i  % 3 === 0) str += Xs   
     else str += As + Bs
    }
    return str
}

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

//==========OR========//
function solution(s) {
    return [...s]
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
//OR///
function solution(a, v) {
    let flag = 0
    for(let i = 0; i < a.length; i ++){
        if(a[i] === v) flag++
    }
    return flag;
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

 //OR//
 function solution(a, b) {
    let str1 = String(a)
    let str2 = String(b)
    
    if( str1 === str2 ) return true
    return false
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
    const filterd = a.filter(num => !filter_list.includes(num));
    
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

//OR//

function solution(n, m) {
    const As = Array(m).fill('A').join("")
    const arr = Array(n).fill(As)
    
    return arr
}

//=========Problem 09 ==========//

For two arrays a and b of the same length, let's say a is a cyclic shift of b, if it's possible for a to become equal to b by performing cyclic shift operations on a - moving 0 or more elements from the beginning of the array to the end of the array without changing the order of the elements.

You are given an array of integers elements. Your task is to check whether elements is a cyclic shift of the sorted array [1, 2, ..., elements.length]. Return the number of elements you need to move to make elements equal to the sorted array. If elements is not a cyclic shift of the sorted array (it's not possible to make them equal), return -1.

function solution(elements) {
    let count = 0
    for (let i = 0; i < elements.length; i++){
        if(isInOrder(elements)) return count
        cyclicShift(elements)
        count++
    }
    return - 1
}


function cyclicShift(arr) {
    const first = arr.shift()
    arr.push(first)
}

function isInOrder (arr) {
    for (let i = 0; i < arr.length - 1 ; i++) {
        const current = arr[i]
        const next = arr[i +1]
        if (current + 1 != next) return false
    }
    return true;
}

//=========Problem 10 ==========//

You are given an array of integers digits representing the digits of a positive integer. For example, digits = [1, 2, 3] represents the integer 123.

It is guaranteed that digits does not have any leading zeros.

Assuming that digits represents the integer n, your task is to return an array that represents the integer n + 1.

function solution(digits) {
    let carryOverOne = false 
    
  for (let i = digits.length - 1 ; i >= 0; i --){
      const digit = digits[i]
      const digitPlus  = digit + 1
      
      if (digitPlus === 10){
          digits[i] = 0
          carryOverOne = true
      } else {
          digits[i] = digitPlus
          carryOverOne = false
          break
      }
  }
  
  if(carryOverOne) digits.unshift(1)
  return digits;
}


//=========Problem 11 ==========//



//=========Problem 12 ==========//

You are given an array of positive integers arr. You'd like to know how many triangles can be formed with side lengths equal to adjacent elements from arr.

Construct an array of integers of length arr.length - 2, where the ith element is equal to 1 if it's possible to form a triangle with side lengths arr[i], arr[i + 1], and arr[i + 2], otherwise 0.

Return the resulting array of integers.

function solution(arr) {
    const sol = []
    for (let i = 0; i < arr.length - 2; i++){
        const a = arr[i]
        const b = arr[i + 1]
        const c = arr[i + 2]
        sol.push(isATriangle(a, b, c))
    }
    return sol
}

function isATriangle (a,b,c){
    if (a + b > c && a + c > b && b + c > a )  return 1
    return 0
}