//=========Problem 1 ==========//

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

//=========Problem 2 ==========//

Count all the words in a string, then produce a new string when the count of each word in parentheses follows each word.

If the string is empty, return an empty string.

function solution(s) {
    if(s.length === 0 ) return ""
    let wordCount  = {}
    let arr = s.split(' ')
    
    for (let word of arr ){
        if(!(word in wordCount))
            wordCount[word] = 0
        wordCount[word]++
        
    }
    const newWordArray = arr.map(word => {
        const count = wordCount[word]
        return word + '(' + count + ')'
    })
    
    return newWordArray.join(' ')
}

//=========Problem 3 ==========//

Given a string of lowercase words separated by single spaces, return a string with all duplicate words removed. However, the first occurrence of a duplicate word should be left in place; only the subsequent duplicates should be removed.

If the string is empty, return an empty string.

function solution(s) {
    const words = {}
    const wordsArray = s.split(' ')
    
    for (let word of wordsArray){
        words[word] = 'word added'
    }
    
    let arr = []
    for (let key in words) {
        arr.push(key)
    }
    
    console.log(words)
    
    return arr.join(' ')
}
