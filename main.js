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
  
//   for(let i =0 ; i<companies.length;i++){
//     console.log(companies[i])
//   }

  //for each

//   companies.forEach(function(company){
//     console.log(company)
//   })

//filter

// let canDrink = []
// for (i=0;i<ages.length;i++){
//     if(ages[i]>=21){
//         canDrink.push(ages[i])
//     }
// }

// const canDrink = ages.filter(function(age){
//     if(age>=21){
//         return true;
//     }
// })

// const canDrink = ages.filter(age=>age>=21)
// console.log(canDrink)

// const retailCompanies = companies.filter(function(company){
//     if(company.category==='Retail'){
//         return true
//     }
// })

// const retailCompanies = companies.filter(company => company.category === 'Retail')
// console.log(retailCompanies)

// const eightiesCompanies = companies.filter(company=>company.start<1990 && company.start>1979)

// console.log(eightiesCompanies)

// const decadeCompanies=companies.filter(company=>(company.end-company.start)>=10)


// console.log(decadeCompanies)

//maps

// const testMap=companies.map(function(company){
//   return `${company.name} [${company.start} - ${company.end}]`
// })

// const testMap=companies.map(company=>`${company.name} [${company.start} - ${company.end}]`)

// console.log(testMap)

// const agesSquare=ages.map(age=>Math.sqrt(age))
// console.log(agesSquare)

// const array = [3, 5, 98, 67];

// for (let index = 0; index < array.length; index++) {
//   console.log(array[index])
// }
// array.forEach(item => {
//   console.log(item)
// })

// const newArray = array.forEach((item, index) => {
//   if(item === 3){
//     return 9;
//   } else {
//     return item * 2;
//   }
// })

// const newArray = array.filter(item => {
//   return item < 70;
// })

// console.log(newArray)

//sort

// const sortedCompanies = companies.sort(function(c1,c2){
//   if(c1.start>c2.start){
//     return 1
//   }else {
//     return -1
//   }
// })

// const sortedCompanies = companies.sort((c1,c2)=>(c1.start>c2.start ? 1 : -1))
//  const sortedCompanies = companies.sort((c1,c2)=>(c1.start-c2.start))

//  console.log(sortedCompanies)


// const sortedAges = ages.sort(function(age1,age2){
//   if(age1>age2){
//     return 1;
//   }else {
//     return -1;
//   }
// })
// const sortedAges = ages.sort((age1,age2)=>age1-age2)
 
// console.log(sortedAges)

//reduce

// let ageSum =0;
// for(let i = 0;i<ages.length;i++){
//   ageSum = ageSum + ages[i]
// }
// let ageSum =0;
// for(let i = 0;i<ages.length;i++){
//   ageSum += ages[i]
// }

// console.log(ageSum)

// const totalYears = companies.reduce((total,company)=>total+(company.end-company.start),0
// )

// console.log(totalYears)

// const combined = ages 
//   .map(age => age*2)
//   .filter(age=> age>=40)
//   .sort((a,b)=>a-b)

//   console.log(combined)