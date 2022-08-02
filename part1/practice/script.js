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


  const notes = [
    {
      id: 1,
      content: 'HTML is easy',
      date: '2019-05-30T17:30:31.098Z',
      important: true
    },
    {
      id: 2,
      content: 'Browser can execute only JavaScript',
      date: '2019-05-30T18:39:34.091Z',
      important: false
    },
    {
      id: 3,
      content: 'GET and POST are the most important methods of HTTP protocol',
      date: '2019-05-30T19:20:14.298Z',
      important: true
    }
  ]

  console.log(notes.map(note => note.content))


  let test = {
    "coord": {
        "lon": -70.6483,
        "lat": -33.4569
    },
    "weather": [
        {
            "id": 721,
            "main": "Haze",
            "description": "haze",
            "icon": "50d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 286.27,
        "feels_like": 285.28,
        "temp_min": 280.68,
        "temp_max": 288.14,
        "pressure": 1018,
        "humidity": 63
    },
    "visibility": 3000,
    "wind": {
        "speed": 1.54,
        "deg": 320
    },
    "clouds": {
        "all": 100
    },
    "dt": 1659448579,
    "sys": {
        "type": 2,
        "id": 2075413,
        "country": "CL",
        "sunrise": 1659439998,
        "sunset": 1659477857
    },
    "timezone": -14400,
    "id": 3871336,
    "name": "Santiago",
    "cod": 200
}

console.log(test.weather[0].icon)