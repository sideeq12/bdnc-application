"use strict";
exports.__esModule = true;
function testValue(a) {
    if (a % 22 === 0)
        return "candaybar";
    if (a % 11 === 0)
        return "bar";
    if (a % 2 === 0)
        return "candy";
    return a;
}
console.log(testValue(66)); //result : "candybar"
