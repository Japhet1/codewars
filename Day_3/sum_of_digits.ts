/*Given n, take the sum of the digits of n. If that value has more than one digit, 
continue reducing in this way until a single-digit number is produced. 
The input will be a non-negative integer.

solution: return (n - 1) % 9 + 1;
**/

export const digitalRoot = (n:number):number => {
    // your code here
    const splitDigit = n.toString().split('')

    const convertDigit = splitDigit.map(Number)

    let digitalRoot: number = 0

    for (let i = 0; i < convertDigit.length; i++) {
        digitalRoot += convertDigit[i];

        if (digitalRoot.toString().split('').map(Number).length > 1) {
            digitalRoot = digitalRoot.toString().split('').map(Number).reduce((a, b) => a + b, 0)
        }
        
    }

    console.log(digitalRoot)

    return digitalRoot
};


digitalRoot(493193)