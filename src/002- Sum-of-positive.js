/*
    You get an array of numbers, return the sum of all of the positives ones.
    Example [1,-4,7,12] => 1 + 7 + 12 = 20
    Note: if there is nothing to sum, the sum is default to 0.
*/


// Solution 1
function positiveSumOne(arr) {
    return arr.reduce((i, s) => {
        if (s > 0) {
            return i + s
        }
        return i
    }, 0)
}

// Solution 2
function positiveSumTwo(arr) {
    let numbers = arr.filter(e => e > 0)
    return numbers.reduce((i, s) => i + s, 0)
}

// Solution 3
function positiveSumThree(arr) {
    let sum = 0
    arr.map(num => {
        if (num > 0) {
            sum += num
        }
    })
    return sum
}

console.log(positiveSumOne([4,-8,5,5]));
console.log(positiveSumTwo([4,-8,5,5]));
console.log(positiveSumThree([4,-8,5,5]));