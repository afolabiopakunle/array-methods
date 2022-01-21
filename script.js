console.log('hello!');

const itemsArray = [
  {name: 'Bike', price: 100},
  {name: 'TV', price: 200},
  {name: 'Album', price: 30},
  {name: 'Console', price: 34},
  {name: 'Computer', price: 65},
  {name: 'Laptop', price: 240},
  {name: 'Wardrobe', price: 200},
  {name: 'Table', price: 13},
  {name: 'Cable', price: 76},
  {name: 'Board', price: 99},
];

//filter Array
console.log(itemsArray.length)
const cheapStuffs = itemsArray.filter(item => {
  return item.price <= 100
})
console.log(cheapStuffs.length)
cheapStuffs.forEach(item => console.log(item.name))