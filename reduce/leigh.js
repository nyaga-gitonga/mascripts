const people =[
{id: "1", name: "Peter", age: 43},
{id: "2", name: "David", age:41},
{id: "3", name: "Pius", age:39},
{id: "4", name: "Leadys", age: 36},
{id: "5", name: "Julius", age:34}
];

let result;

//Count

result= people.reduce((acc,person)=>{
    return acc +1
},0);

//Sum of ages
result=people.reduce((acc,person)=>acc+person.age,0)

//Array of names
result=people.reduce((acc,person)=>[...acc,person.name],[])

//Convert to id =>person lookup
result = people.reduce((acc,person)=>{
    return {...acc, [person.id]: person}
},0)

//Max Age
result = people.reduce((acc,person)=>{
    if(acc === null || person.age > acc)
    return person.age;

    return acc;
},null)

//Min Age
result = people.reduce((acc,person)=>{
    if(acc === null || person.age < acc)
    return person.age;

    return acc;
},null)

//Find by name
result = people.reduce((acc,person)=>{
    if(acc !== null) return null;
    if(person.name ==="Julius") return person;
    return null;
},null)

//All over 18?

result = people.reduce((acc,person)=>{
  if(!acc) return false;
  return person.age >18
},true)

//Any over 18 =some
result = people.reduce((acc, person)=>{
   if(acc) return true;
   return person.age> 18;
},false);

//Count Occurences

const orders = [
    {id: "1", status: "pending"},
    {id: "2", status: "pending"},
    {id: "3", status: "cancelled"},
    {id: "4", status: "shipped"},
]

result= orders.reduce((acc,order)=>{
    return { ...acc, [order.status]: (acc[order.status] || 0)+1}
},{})

// Flatten
const folders = [
    "index.js",
    ["flatten.js", "map.js"],
    ["any.js",["all.js", "count.js"]]
]

function flatten(acc,item){
 if(Array.isArray(item)){
   return item.reduce(flatten,acc)
 }
 return [...acc, item];
}

result= folders.reduce(flatten,[]);



//Own reduce 
function reduce(array, callback, initial){
  let acc = initial;
  for(let i=0; i<array.length; i++){
    acc= callback(acc,array[i],i,array)
    console.log(acc);
  }
  return acc;
}

result = reduce([1,2,3], (acc,num)=>acc+num ,0)


console.log(result);