"use strict";
/*Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces. **/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kata = void 0;
class Kata {
    static getCount(str) {
        // your code here
        const vowel = ["a", "e", "i", "o", "u"];
        const lowerCase = str.toLowerCase().split('');
        let sum = 0;
        for (let i = 0; i < lowerCase.length; i++) {
            for (let j = 0; j < vowel.length; j++) {
                if (lowerCase[i] === vowel[j]) {
                    sum++;
                }
            }
        }
        console.log(sum);
        return sum;
    }
}
exports.Kata = Kata;
Kata.getCount("vowel count");
// const vowelCount = (str: string): number  => {
//     const vowel = ["a", "e", "i", "o", "u"]
//     const lowerCase = str.toLowerCase().split('')
//     let sum: number = 0
//     for (let i = 0; i < lowerCase.length; i++) {
//         for (let j = 0; j < vowel.length; j++) {
//             if (lowerCase[i] === vowel[j]) {
//                 sum++
//             }
//         }
//     }
//     console.log(sum)
//     return sum
// }
// vowelCount("gunstein dev")
