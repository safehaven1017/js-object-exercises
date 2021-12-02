// each of the functions will be passed a user object like the one below.
// Read the documentation for each function to complete the exercises.

/**
 * @typedef Product
 * @property {string} name
 * @property {number} price
 * @property {string} color
 * @property {number} stock
 */
/**
 * @type {Product[]}
 */
const exampleProductArray = [
  {
    name: 'iPhone',
    price: 699,
    color: 'black',
    stock: 10
  },
  {
    name: 'Samsung Galaxy S10',
    price: 799,
    color: 'black',
    stock: 5
  },
  {
    name: 'Google Pixel 3',
    price: 599,
    color: 'black',
    stock: 0
  },
]

/**
 * Looping through an array of objects
 * Use the products array to loop through the array and return the sum of all prices
 * @param {Product[]} products 
 * @returns {string}
 */
function level3exercise1(products) {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    sum += products[i].price;
  }
  return sum;
}

/**
 * Highest priced product
 * Use the products array to loop through the array and return the product with the highest price
 * @param {Product[]} products
 * @returns {Product}
 */
function level3exercise2(products) {
  let highestPrice = 0;
  let highestProduct = ''

  for (let i = 0; i < products.length; i++) {
    if (products[i].price > highestPrice) {
      highestPrice = products[i].price;
      highestProduct = products[i].name;
    }
  }
  return highestProduct;
}

/**
 * Lowest priced product
 * Use the products array to loop through the array and return the name of the product with the lowest price
 * @param {Product[]} products
 * @returns {Product}
 */
function level3exercise3(products) {
  let lowestPrice = 99999;
  let lowestProduct = ''

  for (let i = 0; i < products.length; i++) {
    if (products[i].price < lowestPrice) {
      lowestPrice = products[i].price;
      lowestProduct = products[i].name;
    }
  }
  return lowestProduct;
}

/**
 * Average price
 * Use the products array to loop through the array and return the average price of all products
 * @param {Product[]} products
 * @returns {number}
 */
function level3exercise4(products) {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    sum += products[i].price;
  }
  let avg = sum/products.length;
  return avg;

}

/**
 * Format price and name
 * Use the products array to loop through the array and return an array of strings with the name and price of each product
 * @param {Product[]} products
 * @returns {string[]}
 */
function level3exercise5(products) {
  
}

/**
 * Filter by stock
 * Use the products array to loop through the array and return an array of products that are in stock
 * @param {Product[]} products
 * @returns {Product[]}
 */
function level3exercise6(products) {
  return products.filter(product => product.stock > 0)
}
