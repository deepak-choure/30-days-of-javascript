//day 8 :ES6+ Features
//Activity 1
//task 1
let name = "Alice";
let age = 31;
console.log(`Person's name is ${name} and his age is ${age} years`)

//task2
let multiStr = `hello I am chitti 
the robot 
speed 1 terahertz,
memory 1 zetabyte`
console.log(multiStr);

//Activity 2
//task 3
//array destructuring
let [a,b]=[1,2,3,4,5];
console.log(a,b)

//task 4
let book = {
    title: "Who am I?",
    author: "unknown",
    year: "2029",
  };
  let {title,author}=book
  console.log(`Title of book is ${title} and its author is ${author}`);

  //activity 3
  //task 5
  let arr1 = [1,2,3,4,5];
  let arr2 = [...arr1,6,7,8,9]
  console.log(arr2);

  //task 6
  
  function sum(...args){
   
    return args.reduce((accumulator,currValue)=>accumulator+currValue,0)
  }
  console.log(sum(1,2,3,4,5));

  //task 7
  let product = (a,b=3)=>{
    return a*b;
  }
  console.log(product(3));//9
  console.log(product(3,4));//12


  //task 8
  //Enhanced Object literals
  let personName = "Kavya";
  let email = "example@email.com"
  let personAge = 21;
  function  info(){
    console.log(`name is ${personName} ,age is ${personAge} and email is ${email}`)
}
  //now object
  let person = {
    personName,
    personAge,
    email,
    info
   
  }
  person.info();
  //task 9
//computed property name 
let propname = "username";
let value = "Charlie"
let obj = {
    [propname]:value
}
console.log(obj)