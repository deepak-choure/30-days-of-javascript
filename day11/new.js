//Activity 1
//task 1
let newPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`Resolved after 2 sec`)
    }, 2000);
})
newPromise.then((data)=>{
    console.log(data);
})

//task 2
new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject(`Can't resolved error occured`)
    },2000)
}).then((data)=>{
    console.log("print it if resolved")
}).catch((error)=>{
    console.log(error)
})

//activity 2
//task 3


new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("from resolve one")
    },1000)
})
.then((message)=>{
    console.log(message)
   return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("resolve 2")
        }, 1000);
    })
})
.then((message)=>{
    console.log(message)
   return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("resolve 3")
        }, 1000);
    })
})
.then((message)=>{
    console.log(message)
})
.catch((error)=>{
    console.log(`Error:`,error);
})

//Activity 3
//task 4
async function myFunction(){
    let response = await new Promise((resolve,reject)=>{
        resolve(`message from resolve`)
    })
    console.log(response)
}
myFunction();

//task 5
async function handleasync(){
    try{
        let response = await new Promise((resolve,reject)=>{
            reject(`message from resolve from try`)
        })
        console.log(`hiii`)
    } catch(err){
        console.error(err)
    }
}
handleasync()


//Activity 4
//task 6
fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{response.json()
.then((data)=>{
        console.log(data);
    })
})
.catch((err)=>{
    console.error(`Error:`, err);
});

//task 7
async function publicdata(){
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/users")
        let data = await response.json();
        console.log(data);
    } catch(err){
        console.error(err);
    }
   
}
publicdata()

//Activity 5
//task 8
let promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(`Resolve first after 1 sec`)
    },1000)
})
let promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(`Resolve first after 2 sec`)
    },2000)
})
let promise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(`Resolve first after 3 sec`)
    },3000)
})
let promise4 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(`Resolve first after 4 sec`)
    },4000)
})

try{
    let result = Promise.all([promise1,promise2,promise3,promise4])
    result.then((data)=>{
        console.log(data);
    })
} catch(err){
    console.error(err);//if any promise not resolved then error thrown irrrespective of other
}

//task 9
try{
    let result2 = Promise.race([promise1,promise2,promise3,promise4])
    .then((value)=>{
        console.log(value)
    })
}
catch(error){
    console.log(error);
}
