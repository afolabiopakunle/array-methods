
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

const companies = [
  {name: "Company One", category: "Finance", start: 1981, end: 2003},
  {name: "Company Two", category: "Retail", start: 1992, end: 2003},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989},
]


//filter Array

ages = [42, 12, 13, 24, 30, 11, 8, 4, 23, 12, 21]

// const affordableItems = itemsArray.filter(item => item.price <= 100)
// const canDrink = ages.filter(age => age >= 21)
// console.log(affordableItems);
// console.log(canDrink);

// const financeCompanies = companies.filter(company => company.category === 'Retail');
// const eightiesCompanies = companies.filter(company => company.start >= 1980 && company.start < 1990)
// console.log(financeCompanies)
// console.log("Eighties Companies: ", eightiesCompanies);
// const tenYearsCompanies = companies.filter(company => (company.end - company.start) >= 10)
// console.log(tenYearsCompanies);
const lessThan10 = [];
const moreThan10 = [];
companies.map(company => {
  if((company.end - company.start) >= 10) {
    moreThan10.push(company)
    }  else {
      lessThan10.push(company)
    }
})
console.log("MORE: ", moreThan10)
console.log("LESS: ", lessThan10)