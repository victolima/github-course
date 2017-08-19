const f = (x) => x
const inverse = (x) => x * -1

const add = (y) => (x) => x + y
const subtract = (y) => (x) => add(inverse(y)) (x)

console.log(add(4)(6))
console.log(subtract(4)(6))

//const PA = (y) => (x) => x + y

//const PA_razao2 = PA(2)

//console.log(PA_razao2(5))
