// const person = {
//     name: 'Nabu',
//     age: '24',
//     location: {
//         city: 'Charlotte',
//         temp: 70
//     }
// }

// const {name = 'Anonymous', age } = person
// const {city, temp: temperature} = person.location

// console.log(`${name} is ${age}`)

// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`)
// }


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const {name: publisherName = 'Self-Published'} = book.publisher

// console.log(publisherName)


const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147']

const [street, city, state = 'New York', zip] = address

console.log(`You are in ${city} ${state}.`)

const item = ['Coffee', '$2.00', '$2.50', '$2.75']
const [product, , med] = item

console.log(`a medium ${product} is ${med}`)