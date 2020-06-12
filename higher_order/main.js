const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
  
for(let i=0;i<companies.length;i++) {
    console.log(companies[i]);
}

// forEach

companies.forEach(function (company) {
    console.log(company.name);
});

// filter

// Type 1
let candDrink = [];
for(let i=0;i<ages.length;i++)
{
    if(ages[i] >= 21)
        candDrink.push(ages[i]);
}
console.log(candDrink);

// Type 2
// const candDrink = ages.filter(function(age){
//     if(age>=21){
//         return true;
//     }
// });
// console.log(candDrink);

// Type 3
// const candDrink = ages.filter(age => age >= 21);
// console.log(candDrink);

// Filter retail companies
// Type 1
const retailCompanies = companies.filter(function(company){
    if(company.category === 'Retail') {
        return true;
    }
});
console.log(retailCompanies);

// Type 2
// const retailCompanies = companies.filter(company => company.category === 'Retail');
// console.log(retailCompanies);

// Filter 80s companies

// Type 1
const eightiesCompanies = companies.filter(function(company){
    if(company.start >= 1980 && company.start <1990) {
        return true;
    }
});
console.log(eightiesCompanies);

// Type 2
// const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start<1990));
// console.log(eightiesCompanies);

// map

// Create an array of company names 
// Type 1
const companyNames = companies.map(function(company){
    return company.name;
});
console.log(companyNames);

// Type 2
// const companyNames = companies.map(company => company.name);
// console.log(companyNames);

// Two maps together
const ageMap = ages
    .map(age => Math.sqrt(age))
    .map(age => age *2);

console.log(ageMap);

// sort
// Type 1
const sortedCOmpanies = companies.sort(function(c1,c2){
    if(c1.start > c2.start) {
        return 1;
    } else {
        return -1;
    }
});
console.log(sortedCOmpanies);

// Type 2
// const sortedCompanies = companies.sort((c1,c2) => c1.start > c2.start ? 1:-1);
// console.log(sortedCompanies);

// sort ages
const sortAges = ages.sort((a,b) => a-b);
console.log(sortAges); 

// reduce

// Type 1
let ageSum = 0;
for(let i=0;i<ages.length; i++) {
    ageSum += ages[i];
}
console.log(ageSum);

// Type 2
// const ageSum = ages.reduce(function(total,age){
//     return total + age;
// },0);
// console.log(ageSum);

// Type 3
// const ageSum = ages.reduce((total,age) => total + age,0);
// console.log(ageSum);

// Get total years for all companies
// Type 1
const totalYears = companies.reduce(function(total, company){
    return total + (company.end - company.start);
}, 0);
console.log(totalYears);

// Type 2
// const totalYears = companies.reduce((total, company) => total + (company.end - company.start),0);
// console.log(totalYears);


// Everything combined

const combined = ages
    .map(age => age*2)
    .filter(age => age >=40)
    .sort((a,b) => a-b)
    .reduce((a,b) => a+b,0);

console.log(combined);