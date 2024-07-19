/*Write a function that takes in a string of one or more words, and returns the same string, 
but with all words that have five or more letters reversed (Just like the name of this Kata). 
Strings passed in will consist of only letters and spaces. 
Spaces will be included only when more than one word is present.**/

export function spinWords(words: string): string {
    //TODO Have fun :)

    const splitWord = words.split(" ")

    const filterWord = splitWord.map(str => str.length >= 5 ? str.split('').reverse().join('') : str).join(" ")

    console.log(filterWord)

    return filterWord
}

spinWords("code challenge actually going on well, thanks for asking")