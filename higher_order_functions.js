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

  //forEach
  companies.forEach(function(company) {
      console.log(company.name);
  })

  //Filter
 /* const canDrink=ages.filter(function(age){
    if(age>21){
        return true;
    }
  });*/

  const canDrink=ages.filter(age=>age >= 21);
  console.log(canDrink);

  const retailCompanies=companies.filter(company => company.category=='Retail');
  console.log(retailCompanies);


//Map
  //Ages square

  const agesSquared= ages.map(age => age*age);
  const ageSqrt=ages.map(age => Math.sqrt(age));
  const doubleAge=ages.map(age=> (age*2));
  console.log(agesSquared);
  console.log(doubleAge);

  const ageMap=ages
  .map(age => Math.sqrt(age))
  .map(age => (age*2))

  console.log(ageMap);

  //Sort
    //sorted companys

    const sortedCompanies = companies.sort(function(a,b){
        if(a.start>b.start){
            return 1
        }
        else{
            return -1
        }
    })

    const sortCompanies=companies.sort((a,b) => a.start>b.start? -1 : 1);

    //Ages sort
    const sortAges = ages.sort((a,b)=>a>b?1:-1)

    //sort asc
    const sortAgesAsc=ages.sort((a,b) => a-b)
    //sort desc
   // const sortAgesDesc=ages.sort((a,b) => b-a)
console.log(sortedCompanies);
//console.log(sortAges)
console.log(sortAgesAsc);
//console.log(sortAgesDesc);


//Reduce
 //Sum of ages
 /*let sumAge=0;
 for(let i=0;i < ages.length; i++){
     sumAge+=ages[i];
 }
console.log(sumAge);*/

const sumAgeL= ages.reduce(function(total,age){
   return total+age
},0)

const sumAge=ages.reduce((total,age)=>total+age,0)

//total years for all companies
const totalYears= companies.reduce((total,company) => total + (company.end-company.start),0)

console.log(sumAge);
 
console.log(totalYears);

const combined = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);