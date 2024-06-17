// Traditional version (adding 7)
function add7(number) {
    return number + 7;
}
console.log(add7(2))

// Arrow function version (adding 7)
let arrow7 = (x) => x + 7;
console.log(arrow7(2))

// Traditional (Multiply two numbers)
function multiply(firstNum, secondNum) {
    return firstNum * secondNum;
}
console.log(multiply(2, 5))

// Arrow function (Multiply two numbers)
let arrowMultiply = (firstNum, secondNum) => firstNum * secondNum;
console.log(arrowMultiply(2, 5));

// Traditional (First Letter Capital)
function capitalize(string) {
    return (string.replace(string.at(0), string.at(0).toUpperCase()));
}
console.log(capitalize("aBcDeFgH"))

// Arrow Function (First Capital Letter)

let arrowCapitalize = (string) => string.replace(string.at(0), string.at(0).toUpperCase());
console.log(arrowCapitalize("aBcDeFgH"))


// Traditional (Last Letter of String)
function lastLetter(string) {
    return (string.at(-1))
}
console.log(lastLetter("Beans"))

// Arrow Function (Last Letter of String)

let arrowLastLetter = (string) => string.at(-1);
console.log(arrowLastLetter("Beans"))
console.log(arrowLastLetter("Super epic amazing cool working!"))
