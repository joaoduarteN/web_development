function sumAll(arr){
    return arr.map(a => a.price).reduce((acumulator, curr) => acumulator + curr, 0)
}

let productList = [
    {
      product: 'Laptop',
      price: 999.99,
      category: 'Electronics'
    },
    {
      product: 'Smartphone',
      price: 499.99,
      category: 'Electronics'
    },
    {
      product: 'Running Shoes',
      price: 79.99,
      category: 'Footwear'
    },
    {
      product: 'Headphones',
      price: 79.99,
      category: 'Electronics'
    },
    {
      product: 'Backpack',
      price: 49.99,
      category: 'Fashion'
    }
  ];
  
console.log(sumAll(productList))
  
// console.log(sumAll(productList))
