//Functions
//Activity 1
//task 1
function evenOrOdd(num){
    if(num%2==0){
        console.log(`${num} is even`);
    }else {
        console.log(`${num} is odd`);
    }
}
evenOrOdd(-5);

//task2 
function squareOFnum(num){
    return num*num
}
console.log(squareOFnum(Math.sqrt(2)));

//Activity 2
//task 3
function MaxOfTwo(num1,num2){
    if(num1>num2){
        console.log(`${num1} is maximum number btw ${num2} and ${num1}`);
    }else if(num2>num1){
        console.log(`${num2} is maximum number btw ${num2} and ${num1}`);
        
    }else {
        console.log(`both ${num1} and ${num2} are equal`);
    }
}
MaxOfTwo(865,584)

//task 4
function AddTwoString(str1,str2){
    return str1.concat(str2)
}
console.log(AddTwoString("John ","doe"))

//task5
let sumOfTwo = (num1,num2)=>{
    return num1+num2;

}
console.log(sumOfTwo(4,6))

//task6
let isPresent = (str,char)=>{
    if(str.includes(char)){
        return true;
    }
    return false;
}
console.log(isPresent("deepak","d"));

//task7
function productOfTwo(num1,num2=3){
    return num1*num2;
}
console.log(productOfTwo(3,2));

//task8
function greet(name,age=23){
    return `Hello ${name},(${age}) Have a good day`

}
console.log(greet("Steve Jobs"));

//task9
function HigherOrderfun(func,num,input){
   let i =0;
   while(i<num){
    func(input)
    i++;
   }
}
function sayHi(name){
    console.log(`Hiii, ${name}`)
}
HigherOrderfun(sayHi,3,"tony");

//task 10
function Myfn(func1,func2,input){
   func2( func1(input))

}

Myfn(greet,sayHi,"deepak")

//done 