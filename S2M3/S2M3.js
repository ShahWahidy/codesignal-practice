//=========Problem 1 ==========//

Create a 2D array of size row_count x col_count. Fill the array with 0.

function solution(row_count, col_count) {
    const result = []
    for(let i = 0; i < row_count; i++){
        let rows = []
        for(let j = 0; j < col_count; j++){
            rows.push(0)
        }
        result.push(rows)
    }
    return result
    
    //using built-in methods//
    let col = Array(col_count).fill(0)
    let rows = Array(row_count).fill(col)
    return rows;
}

//=========Problem 2 ==========//

Create a square 2D array of size size x size. Fill the array with 0.

Then draw a line of 1s down the main diagonal.

This is called an identity matrix.

function solution(size) {
    const result = []
    for(let i = 0; i < size; i ++){
        const rows = []
        for(let j = 0; j < size; j++){
            if (i === j ){
                rows.push(1)
            } else {
                rows.push(0)
            }
        }
        result.push(rows)
    }
    return result;
}

//=========Problem 3 ==========//

There is a bug in one line of the code. Find it, fix it, and submit.
Given a rectangular matrix of characters, add a border of asterisks(*) to it.

function solution(picture) {

    var answer = [''];
  
    for (var i = 0; i < picture[0].length+2; i++) {
      answer[0] += '*';
    }
  
    for (var i = 0; i < picture.length; i++) {
      answer.push('*');
      for (var j = 0; j < picture[0].length; j++) {
        answer[i + 1] += picture[i][j];
      }
      answer[i + 1] += '*';
    }
  
    answer.push(answer[0]);
  
    return answer;
  }
//=========Problem 4 ==========//

Return a substring (part of a string) between two indexes.

The substring from index a up to (but not including) index b should be returned.

If a is less than 0, treat it like 0.

If b is greater than the length of the string, treat it like the length of the string.

If b is less than a, return an empty string.

function solution(s, a, b) {
    return s.slice(a, b)
}

//=========Problem 5 ==========//

Given a number, return the number of digits.

You may not use strings to solve this challenge.

You might have to get mathy for this one.;


function solution(n) {
    let count = 1
    
    while ( ( n /= 10 ) >= 1) {
        count++
    }
    
    return count;
}


//=========Problem 6 ==========//

Write a function that builds an n x n multiplication table.

The result will be a 2D array. The 0th row and column of the table begin with 1 and end with n..

function solution(n) {
    const results = []
    for(let rows = 1; rows <= n; rows ++ ){
        let rowsArr = []
        for(let cols = 1; cols <= n; cols ++ ){
            rowsArr.push(cols * rows)
        }
        results.push(rowsArr)
    }
    return results;
}

//=========Problem 7 ==========//

This function should scan an array for certain elements and remove them.

function solution(a, x) {
    return a.filter(ele => ele != x)
}

//=========Problem 8 ==========//

You have an array p of points on a Cartesian plane. Find and return the minimum possible Euclidian distance between two points with different indices in p.

function solution(p) {
    let min = Infinity;
    for(let i = 0 ; i < p.length - 1; i ++){
        for (let j = i + 1; j< p.length; j++){
            const dist = getDistance(p[i], p[j])
            if(dist < min) min = dist
        }
    }
    return min
}

function getDistance(p1, p2){
    const x1 = p1[0]
    const y1 = p1[1]
    const x2 = p2[0]
    const y2 = p2[1]
    
    const xs = Math.pow(x1 -x2, 2)
    const ys = Math.pow(y1 - y2, 2)
    
    const d = Math.sqrt(xs + ys)
    return d;
}

//=========Problem 9 ==========//

An odometer palindrome is the when the mileage on your odometer is the same when the digits are reversed. For example, 123321.

Assume your odometer is 6 digits and does not show 10ths of miles/kilometers.

The question is, for a given current odometer reading, when is the next odometer palindrome?

If the odometer is currently at a palindrome, we're still interested in the next one.

The input is an integer, but the result should be a string padding with leading zeros to 6 places.


function solution(current) {
    if(current === 999999) return '000000';
    current++
    
    while(!isPal(current)) current++
    return convertToSixDigString(current)
}

function isPal(number){
    let str = convertToSixDigString(number)
    return str === str.split('').reverse().join('')
}

function convertToSixDigString(num){
    let str = String(num)
    let difference = 6 - str.length
    let zeros = Array(difference).fill('0').join('')
    str = zeros + str
    
    return str;
}
