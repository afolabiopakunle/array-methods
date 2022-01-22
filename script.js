
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
  {name: "Company Afolabi", category: "Finance", start: 1981, end: 2004},
  {name: "Company Afolake", category: "Retail", start: 1992, end: 2003},
  {name: "Company Omolola", category: "Auto", start: 1999, end: 2007},
  {name: "Company Olajumoke", category: "Retail", start: 1989, end: 2010},
  {name: "Company Olaotan", category: "Technology", start: 2009, end: 2014},
  {name: "Company Omodesire", category: "Finance", start: 1987, end: 2010},
  {name: "Company Ayomikun", category: "Auto", start: 1986, end: 1996},
  {name: "Company Ajibade", category: "Technology", start: 2011, end: 2016},
  {name: "Company Adenike", category: "Retail", start: 1981, end: 1989},
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
// const lessThan10 = [];
// const moreThan10 = [];
// companies.map(company => {
//   if((company.end - company.start) >= 10) {
//     moreThan10.push(company)
//     }  else {
//       lessThan10.push(company)
//     }
// })
// console.log("MORE: ", moreThan10)
// console.log("LESS: ", lessThan10)

// const sortedCompaniesByYear = companies.sort((a, b) => (a.start < b.start) ? -1 : 1);
// const sortedCompaniesByName = companies.sort((a, b) => (a.name > b.name) ? 1 : -1) 
// // console.log(sortedCompaniesByName)

// sortedAges = ages.sort((a, b) => a - b);

// console.log(sortedAges)
totalAges = ages.reduce((total, age) => total + age, 0);
totalYears = companies.reduce((total, company) =>  total + (company.end - company.start), 0)
console.log(totalAges)
console.log(totalYears)