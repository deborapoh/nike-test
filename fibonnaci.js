const fibonacciNumber = (num) => {
    if (num < 2) {
        return num
    }

    return fibonacciNumber(num - 1) + fibonacciNumber(num - 2);
}


const fibonacciSequence = (n) => {
    let output = ''

    for (let i = 0; i < n; i++) {
        output += `${fibonacciNumber(i)}, `
    }

    return output
}

console.log(fibonacciSequence(10))

