console.log("hello world")

//challenge area

const multiplier = {
    numbers: [1,20,20,23,232,12,26,334,22,43],
    multiplyBy: 3.5,
    multiply() {
       return this.numbers.map((x) => x * this.multiplyBy)
    }
}

console.log(multiplier.multiply())