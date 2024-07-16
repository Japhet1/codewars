/* Complete the function that accepts a string parameter, and reverses each word in the string. 
All spaces in the string should be retained.**/

export function reverseWords(str: string): string {
    // your code here

    const splitWord = str.split(' ')
  
    const reversedWord = splitWord.map( str => str.split('').reverse().join(''))
  
    const result = reversedWord.join(' ')
  
  
    return result;
}

reverseWords("Go for it")