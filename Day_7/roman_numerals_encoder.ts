/* Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and 
returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the leftmost digit and 
skipping any digit with a value of zero. There cannot be more than 3 identical symbols in a row.

In Roman numerals:

1990 is rendered: 1000=M + 900=CM + 90=XC; resulting in MCMXC.
2008 is written as 2000=MM, 8=VIII; or MMVIII.
1666 uses each Roman symbol in descending order: MDCLXVI.

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000

**/


export function solution(number: number): string {
    // convert the number to a roman numeral

    // const data = number

    

    // const dataString = data >= 1 && data <= 3999 ? data.toString().split('').map(Number) : ""

    // // const numberArray = Array.from(dataString, digit => parseInt(digit))
    // const one = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
    // const two = ["X", "L"]
    // const three = ["C", "D"]
    // const four = ["M"]

    // const symbol = {1: "I", 5: "V", 10: "X", 50: "L", 100: "C", 500: "D", 1000: "M"}

    const romanSymbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    const romanValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    let romanNumeral = '';

    // Loop through each symbol and value
    for (let i = 0; i < romanSymbols.length; i++) {
        // Repeat while the number is greater than or equal to the current value
        while (number >= romanValues[i]) {
            // Append the corresponding symbol to the result string
            romanNumeral += romanSymbols[i];
            // Subtract the value from the number
            number -= romanValues[i];
        }
    }


    console.log(romanNumeral)
    
    return romanNumeral
}


solution(25)