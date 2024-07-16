"use strict";
/*Given n, take the sum of the digits of n. If that value has more than one digit,
continue reducing in this way until a single-digit number is produced.
The input will be a non-negative integer.**/
Object.defineProperty(exports, "__esModule", { value: true });
exports.digitalRoot = void 0;
const digitalRoot = (n) => {
    // your code here
    const d = (n - 1) % 9 + 1;
    console.log(d);
    return d;
};
exports.digitalRoot = digitalRoot;
(0, exports.digitalRoot)(493193);
