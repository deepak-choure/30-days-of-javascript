//Activity 1 :For Loop
//task 1 
for(let i =1;i<=10;i++){
    console.log(i);
}

//task 2
for(let i =1;i<=10;i++){
    console.log(`5 * ${i} is ${5*i}`);
}

//Activity 2:While loop
//task 3

let sum =0;
let i =1;
while(i<=10){
    sum+=i;
    i++;
}
console.log(`sum of 1 to 10 is ${sum}`)

//task 4
console.log(`number 10 to 1 using while loop`)
let n = 10;
while(n>0){
    console.log(n);
    n--;
}

//Activity 3:Do..While Loop
//task 5
console.log(`number 1 to 5 using do..while`)
let num = 1;
do {
    console.log(num);
    num++
} while (num<=5);

//task 6
let number = 5;
let factorial =1;
let j = number;
do{
    factorial*=j;
    j--;
}while(j>0)
console.log(`factorial of ${number} is ${factorial}`);


//Activity 4
//task 7
for(let i =0;i<=5;i++){
    let stars = "";
    for(let j =0;j<=i;j++){
        stars+="* "
    }
    console.log(stars)
}

//Activity 5
//task 8
for(let i =1;i<=10;i++){
    if(i==5){
        continue;
    }
    console.log(i);
}

//task 9
for(let i =1;i<=10;i++){
    if(i == 7){
        break;
    }
    console.log(i);
}