//Activity 1

function outerFunction(){
    let pi = 3.14;
   return function innerFunction(rad){
        return pi * rad * rad;
    }
}
const closureFunction = outerFunction();
console.log(closureFunction(5));

function closureCounter(){

    let count =0;
    return function(){
        count++;
        return count;
    }
}
const increment = closureCounter();
console.log(increment())
console.log(increment())
console.log(increment())
console.log(increment())
console.log(increment())

//Activity 2
function generateID(){
    let id = 0;
    return function(){
        id++;
        return id;
    }
}
const uniqueID = generateID();
console.log(uniqueID());
console.log(uniqueID());
console.log(uniqueID());
console.log(uniqueID());

function greetUser(username){
    return function(){
        console.log(`hello,${username}`)
    }
}

const greet = greetUser("Alice");
greet();


//Activity 3

let arr = [];
for(let i =0;i<=5;i++){
    arr.push(function(){
        console.log(i);
    })
}
arr.forEach((func)=>func());

//Activity 4
function module(){
    let items =[];
    //add
    function add(item){
        items.push(item);
    }
    //remove
    function remove(item){
        items = items.filter(currItem => currItem !== item);


    }
    //list
    function listItem(){
        return items;
    }

    return{
        add,remove,listItem
    }
}

const modules = module();
modules.add("Alice")
modules.add("Bob")
modules.add("Charlie")
console.log(modules.listItem());
modules.remove("Bob");
console.log(modules.listItem());

//Activity 5
// Memoization function
function memoize(fn) {
    const cache = {}; // Store computed results

    return function(...args) {
        const key = JSON.stringify(args); // Create a unique key based on arguments

        if (cache[key]) {
            return cache[key]; // Return cached result if available
        }

        const result = fn(...args); // Compute result
        cache[key] = result; // Cache the result
        return result; // Return the result
    };
}

// Factorial function
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

// Create a memoized version of the factorial function
const memoizedFactorial = memoize(factorial);

// Usage
console.log(memoizedFactorial(5)); // Outputs: 120
console.log(memoizedFactorial(6)); // Outputs: 720
console.log(memoizedFactorial(5)); // Outputs: 120 (from cache)
