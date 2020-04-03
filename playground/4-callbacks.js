// setTimeout(() => {
//     console.log('First seconds are up')
// }, 1000)

// setTimeout(() => {
//     console.log('Two seconds are up')
// }, 2000)


// const names = ['Andrew', 'Jen', "Jess"]
// const shortName = names.filter((name) => {
//     return name.length <= 4
// })

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }
//         callback(data)
//     }, 3000)
// }

// geocode("Miami", (data) => {
//     console.log(data)
// })

const add = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b)
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum)
})