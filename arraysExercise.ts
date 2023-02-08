// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":

const ages2: number[] = [];

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
const gameBoard: string[][] = [[]];

// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a Product type that contains a name and a price.
// An example product could be:
// {name: "coffee mug", price: 11.50}

type Product = {
  name: string,
  price: number,
}

const firstProduct: Product = {
  name: "coffee mug",
  price: 11.50,
}

const secondProduct: Product = {
  name: "french press",
  price: 15.50,
}

// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
const getTotal = (products: Product[]): number => {
  // return products.reduce((accumulator, value) => {
  //   return accumulator + value.price;
  // }, 0)

  // let total = 0;

  // for (let i = 0; i < products.length; i++) {
  //   total = total + products[i].price;
  // }

  // return total;

  let total = 0;
  for (let product of products) {
    total += product.price;
  }
  return total;

}

