//Activity 1
//task 1
let arr = [1,2,3,4,5];
console.log(arr)


//task 2
console.log(arr[0],arr[arr.length-1]);//1 5

//activity 2
arr.push(6);
console.log(arr);//[1,2,3,4,5,6]
arr.pop()
console.log(arr);//[1,2,3,4,5]
arr.shift();
console.log(arr);//[2,3,4,5]
arr.unshift(1)
console.log(arr)//[1,2,3,4,5]

//Activity 3
//task 7
let doubledArr = arr.map((num)=>num*2)
console.log(doubledArr);

//task8
let evenArr = arr.filter(num=>num%2==0)
console.log(evenArr)//[2,4]

//task9
let sumOfArr = arr.reduce((sum,curr)=>{return sum+curr},0);
console.log(sumOfArr)//15


//Activity 4
//task 10
for(let i =0;i<arr.length;i++){
    process.stdout.write(arr[i]+" ");
}
console.log()

//task 11
arr.forEach((data)=>{
   process.stdout.write(data+" ");
})
console.log()

//Activity 5
//task 12
let mat = [[1,2,3,4,5],[2,4,6,8,10],[1,3,5,7,9],[0,1,1,2,3],[1,2,6,24,120]];
mat.forEach((arr)=>{
    arr.forEach((num)=>{
        process.stdout.write(num+" ");
    })
    console.log();

})

//task 13
console.log(mat[3][3])