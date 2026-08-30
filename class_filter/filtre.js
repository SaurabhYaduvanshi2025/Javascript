// const myNums = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNums.filter( (num) => { return num > 4} )

// console.log(newNums)


// const products = [
//   { id: 1, name: "Laptop", category: "Electronics", price: 55000, inStock: true, rating: 4.5 },
//   { id: 2, name: "T-Shirt", category: "Clothing", price: 800, inStock: true, rating: 4.0 },
//   { id: 3, name: "Headphones", category: "Electronics", price: 2500, inStock: false, rating: 3.8 },
//   { id: 4, name: "Sneakers", category: "Footwear", price: 3200, inStock: true, rating: 4.7 },
//   { id: 5, name: "Smartphone", category: "Electronics", price: 22000, inStock: true, rating: 4.2 },
//   { id: 6, name: "Jeans", category: "Clothing", price: 1500, inStock: false, rating: 3.9 },
//   { id: 7, name: "Smartwatch", category: "Electronics", price: 4000, inStock: true, rating: 4.1 },
//   { id: 8, name: "Sandals", category: "Footwear", price: 1200, inStock: true, rating: 3.5 }
// ];



// let  userProd =  products.filter((up) => up.price >= 10000 )

//  console.log(userProd);


// let userPro = products.filter((up) =>{return up.category === 'Electronics'});

// console.log(userPro)

// let userPro = products.filter((up)=> {return up.category === 'Footwear' &&  up.price > 1800});
//  console.log(userPro)

const myNumber = [1,2,3,4,5,6,7,8,9]

let newNum = myNumber.map((num) => {return num + 10})

console.log(newNum)