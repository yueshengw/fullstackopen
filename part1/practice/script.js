console.log("Hello World")
const t1 = [1, -1, 3];

const t2 = t1.concat(5);

console.log(t1)
console.log(t2)

const t3 = t2;
t3.push(3)

console.log(t2)
console.log(t3)

const m1 = t1.map(num => num/2)
console.log(m1)
console.log(t1)

const t4 = [0, 1, 2, 3, 4, 5, 6, 7]

console.log(t4)

const [first, second, ...rest] = t4

console.log(first)
console.log(second)
console.log(rest)

const object1 = {
    name: 'desk',
    price: 55,
}

const sum = (p1, p2) => {
    return p1 + p2
}

const square = p => {
    return p * p
}

function yo(name) {
    console.log(`yo ${name}!`)
}

const divide = (p1, p2) => p1 / p2

console.log(`sum: ${sum(5, 10)}`)
console.log(`square: ${square(5)}`)

console.log(`division: ${divide(10,5)}`)

yo('bob')

const expression = function yo2(name) {
    console.log(name)
}

expression('hi')

const arto = {
    name: 'Arto Hellas',
    greet: function() {
      console.log('hello, my name is ' + this.name)
    },
  }
  
  setTimeout(arto.greet, 1000)