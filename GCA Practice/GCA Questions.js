// You are given an array of integers numbers and two integers left and right. You task is to calculate a boolean array result, where result[i] = true if there exists an integer x, such that numbers[i] = (i + 1) * x and left ≤ x ≤ right. Otherwise, result[i] should be set to false.

function solution(numbers, left, right) {
    let arr = []
    for (let i = 0 ; i < numbers.length; i ++){
        let flag = false;
        for (let x = left; x <= right; x++){
            if((i+1) * x == numbers[i]){
                flag = true;
                break;              
            }
        }
        arr.push(flag)
    }
    return arr;
}

You are given two arrays of integers a and b of the same length, and an integer k. We will be iterating through array a from left to right, and simultaneously through array b from right to left, and looking at pairs (x, y), where x is from a and y is from b. Such a pair is called tiny if the concatenation xy is strictly less than k.

function solution(a, b, k) {
    const set = new Set();
      for (let i = 0, j = b.length-1; i < a.length; i++, j--) {
              const result = String(a[i]) + String(b[j])
              if (result < k) {
                  set.add(result);
              }
      }
      return set.size;
  
}

Given an integer n and an array a of length n, your task is to apply the following mutation to a:
function solution(n, a) {
    let b = [];

    for (let i=0; i <= n-1; i++) {
         b[i]=0;
        
        if(((i-1) >= 0) && ((i-1) < n)){
            b[i]+=a[i-1];
        }
       if(((i) >= 0) && ((i) < n)){
           b[i]+=a[i];
        }
       if(((i+1) >= 0) && ((i+1) < n)){
           b[i]+=a[i+1];
        }
    }
    return b;
}