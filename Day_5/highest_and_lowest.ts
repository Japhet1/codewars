/*In this little assignment you are given a string of space separated numbers, 
and have to return the highest and lowest number. **/

export class Kata {
    static highAndLow(numbers: string): string {
      // throw new NotImplementedException() ?
      // No, wait, this is TypeScript.
        const numberArray = numbers.split(" ").map(Number)
        const higherNumber = Math.max(...numberArray)
        const lowerNumber = Math.min(...numberArray)

        const result = `"${higherNumber} ${lowerNumber}"`

        console.log(result)

        return result
    }
}


Kata.highAndLow("5 1 3 7 9 -6 2 4 8")