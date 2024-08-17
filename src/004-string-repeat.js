/*
    Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
    Examples (input -> output)
    6, "I"     -> "IIIIII"
    5, "Hello" -> "HelloHelloHelloHelloHello"
*/

// Solution 1
function repeatStr (n, s) {
    const stringRepeated = s.repeat(n)
    return stringRepeated;
}

// Solution 2
function repeatStrTwo (n, s) {
    let stringRepeated = ""
    for (let i = 0; i < n; i++) {
        stringRepeated += s
    }
    return stringRepeated;
}

console.log(repeatStr(7, "c"));
