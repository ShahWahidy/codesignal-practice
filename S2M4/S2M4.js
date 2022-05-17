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
//=========Problem 5 ==========//
//=========Problem 6 ==========//
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