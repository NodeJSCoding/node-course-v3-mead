//Object property shorthand
const name = 'Mykola'
const userAge = 27

const user = {
    name,
    age: userAge,
    location: 'Lviv'
}

console.log(user)

//Object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// const label = product.label
// const price = product.price

// const {label: productLabel, price, rating} = product
// console.log(productLabel)
// console.log(price)
// console.log(rating) //undefined


//1
// const transaction = (type, myProduct) => {
//     const { lacel } = myProduct
// }

// transaction('Order', product)

//2
const transaction = (type, { label, stock}) => {

}

transaction('Order', product)