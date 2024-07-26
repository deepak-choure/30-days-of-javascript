//Activity 1 
 function add(a,b){
    return a+b;
}
 let person = {
    name:"Alice",
    age:21,
    greet:function(){
        console.log(`Hii ${this.name}`)
    }
}
export {add,person}


//Activity 2
//task 3
export function subtract(a,b){
    return a-b;

}
export function sumOfN(n){
    return (n*(n+1))*0.5;
}

//task 4
const message = ()=>{
    let name = "Alice";
    let age = 31;
    return `My name is ${name} and age is ${age}`
}
export default message;



//task 5
export const GOLDEN_RATIO = 1.61803;
export const SPEED_OF_LIGHT = 299792458;
export function factorial(n){
    let fect =1;
    for(let i =0;i<=n;i++){
        fect *=i;
    } 
    return fect;
}
export function multiply(a, b) {
    return a * b;
}