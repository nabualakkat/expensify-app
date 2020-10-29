const promise = new Promise((resolve, reject) => {
    setTimeout(()=> {
        // resolve ({
        //     name: 'Nabu',
        //     age: 26
        // })
        reject('something went wrong')
    }, 5000)

})

console.log('before')

promise.then((data) => {
 console.log(data)
}).catch((error) => {
    console.log('error: ', error)
})


console.log('after')