//Setup constructor to take name and age (default to 0)
// getDescription - Andrew Mead is 26 years(s) old.
//babel src/playground/es6-classes-1.js --out-file=public/scripts/app.js --presets=env,react --watch

class Person {
    constructor(name = 'Anonymous', age = 0){
        this.name = name
        this.age = age
    }
    
    getGreeting() {
        return `Hi. I am ${this.name}.`;
    }

    getDescription() {
        return `${this.name} is ${this.age}.`;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation='') {
        super(name,age)
        this.homeLocation = homeLocation
    }

    getGreeting() {
        return super.getGreeting() + (this.homeLocation ? ` I'm visiting from ${this.homeLocation}.`: ``)
    }
}

const me = new Person('Andrew Mead',26)
const traveler = new Traveler('Nathan', 54, "Texas")
console.log(traveler)
console.log(traveler.getGreeting())

