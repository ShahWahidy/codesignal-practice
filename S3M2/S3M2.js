//=========Problem 1 ==========//


Codewriting

Description
Compute the value f(n) for a number of input integers, nums, where f() is an expensive, time-consuming function.

Return the results of f(n) in an array.

Hint: cache the results of previous calls to keep them from timing out.

Add this function f() before your code for solution():

function f(n) {
    let r = 1;
    
    for (let i = 0; i < 5000000; i++)
        r = ((r + n) * n) % 9973;
        
    return r;
}


function solution(nums) {
    let result = []
    let cache = {}
    
    for (n of nums) {
        if(!(n in cache))
            cache[n] = f(n)
        result.push(cache[n])
    }
    
    return result;
}

//=========Problem 2 ==========//

function solution(s) {
    function solution(s) {
        if(s.length === 0) return []
       
        let cache = {}
        let wordsArray = s.split(' ')
        
        for (let word of wordsArray) {
            if((word in cache)){
                cache[word] = cache[word] + '#'
            } else {
                cache[word] = '#'   
            }
        }
        
        let sol = []
        for (let word in cache) {
            const str = `${word}: ${cache[word]}`
            sol.push(str)
        }
        
        sol.sort()
        return sol
    }

//=========Problem 3 ==========//

This challenge is about computing Fibonacci Numbers.

This is a famous numeric sequence that starts 0,1, and then each subsequent number is the sum of the previous two.

function solution(n) {
    const cache = {}
    return fib(n, cache)
}

function fib(n, cache) {
    if (n === 0) return 0
    if (n === 1) return 1
    if (n in cache) return cache[n]
    const result = fib(n-1, cache) + fib(n-2,cache)
    cache[n] = result 
    return result
}

