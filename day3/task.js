//day3 :Control Structure

///Activity 1 
//task1 wap to check if a number is positive ,-ve or zero 
let num = -2;
if(num>=0){
    if(num == 0){
        console.log(`number is ${num}`);
    
    } else{
        console.log(`Number ${num} is positive`)
    }
    
} else{
    console.log(`Number ${num} is negative `)
}
//task 2 
let age = 17;
if(age>=18){
    console.log(`Your age is ${age} , YES you'r eligible for voting`)
}
else{
    console.log(`Your age is ${age} hence you are not eligible for vote`);
}

//activity 2 nested if else
//tastk 3
let num1 = 6;
let num2 = 7;
let num3 = 8;
if(num1>num2){
    if(num1>num3){
        console.log(`highest number is ${num1}`);
    } else {
        console.log(`Highest number is ${num3}`);
    }
} else if(num2>num3){
    console.log(`Highest number is ${num2}`);
} else{
    console.log(`highest number is ${num3}`);
}

//Activity 3 Switch case 
//task 4
let num4 =9;
switch (num4) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;            
    default:
        console.log("Enter valid number")
        break;
}

//task 5 
let marks = 400;
let grade ;
switch(true){
    case (marks>=90 && marks<=100):
        grade ="A";
        break;
    case (marks>=80 && marks<90):
        grade ="B";
        break;
    case (marks>=70 && marks<80):
        grade ="C";
        break;
    case (marks>=60 && marks<70):
        grade ="D";
        break;
    case (marks>=50 && marks<60):
        grade ="E";
        break;
    case (marks>=0 && marks<50):
        grade ="F";
        break;
    default:
            grade = "Invalid marks";

}
console.log(`Marks: ${marks}, Grades:${grade}`);

//Activity 4: 
//task 6;
let num5 = 45;
console.log(num5%2==0?"Even":"Odd");

//activity 5:
//task 7:
let year = 1900;
if((year%4==0) && (year%400==0 || year%100 != 0)) {
    console.log(`${year} is a leap year`)


}else{
    console.log(`${year} is not a leap year`)
}
