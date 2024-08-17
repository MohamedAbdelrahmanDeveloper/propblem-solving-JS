/*
    Convert number to reversed array of digits
    Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

    Example(Input => Output):
    35231 => [1,3,2,5,3]
    0 => [0]
*/

// solution 1
function digitize(n) {
    const stringToArray = n.toString().split('').reverse()
    const strToNum = stringToArray.map(e => parseInt(e))
    return strToNum
}

// solution 2
function digitizeTwo(n) {
    let arr = []
    for(let num of `${n}`) {
        arr.unshift(Number(num))
    }
    return arr
}

// solution 3 without built-in functions
function digitizeThree(n) {
    const numberToString = `${n}`
    let arr = []
    for (let i = numberToString.length - 1; i >= 0; i--) {
        arr[i] = Number(numberToString[numberToString.length - i - 1])
    }
    return arr
}

console.log(digitizeThree(4878));