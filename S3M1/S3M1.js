Count the number of occurrences of certain letters in a string.

We want to know the counts of each of a set of letters in the input string. For instance, we might want to know how many as, xs, and js there are.

You'll return the list of requested counts as an array.

If letters is an empty string, return an empty array.

function solution(s, letters) {
    let letterCount = {}
    
    for (let c of s ) {
        if(!(c in letterCount))
            letterCount[c] = 0
        letterCount[c]++
    }
    let sol = []
    for (let c of letters){
        if (c in letterCount)
            sol.push(letterCount[c])
        else
            sol.push(0)
    }

}