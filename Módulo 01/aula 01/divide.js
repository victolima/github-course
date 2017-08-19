const inverse = (x) => x * -1

const add = (y) => (x) => x + y
const subtract = (y) => (x) => add(inverse(y))(x)

const divide = (y) => (x) => {

    let result = y
    let cont = 0

    const sub = subtract(x)

   	while (result > 0) {
        result = sub(result)
        cont++
    }

    return cont
}

console.log('15 / 3 =', divide(15)(3))