'use strict';

// function solve(args) {
//     var n = +args[0];
//     var base2 = (n).toString(2);
//     console.log(base2[2]);
// }

function solve(args) {
    var n = +args[0];
    var position = 3;
var thirdBit = n >> position & 1;
console.log(thirdBit);
}