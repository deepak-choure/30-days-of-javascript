//activity 1
//task 1
function myFn() {
  try {
    throw new Error();
  } catch (err) {
    console.error(`Some ERROR occured : ${err}`);
  }
}
myFn();

//task 2
function divide(a, b) {
  try {
    if (b == 0) {
      throw new Error();
    }
    return a / b;
  } catch (error) {
    console.error(`Error occured in division try putting appropriate value `);
  }
}
console.log(divide(2, 0));

//Activity 2
function temp() {
  try {
    console.log(`Inside the try block`);
    throw new Error(`throwing error in try block`);
  } catch (error) {
    console.error(
      `Error catched!! inside catch block,Error message:`,
      error.message
    );
  } finally {
    console.log(
      `Inside the finally block it run either error occured or not  `
    );
  }
}
temp();

//Activity 3
//task 4
class CustomError extends Error {
  constructor(message) {
    //initialise Error constructor
    super(message);
    this.name = "CustomErrr";
  }
}
function letsThrowCustomError() {
  throw new CustomError(`CustomERRor from letsThrowCustomError function`);
}

//try catch
try {
  letsThrowCustomError();
} catch (error) {
  if (error instanceof CustomError) {
    console.error(`Here is an custom error: ${error.message}`);
  }
}

//task 5
function validateUserInput(input) {
  try {
    if(input.length == 0){
        throw new CustomError("Invalid Input ")
    }
    console.log(`Input validated successfully`)

  } catch (error) {
    console.log(`Error occured while validating input,Error:${error.message}`)
  }
}
validateUserInput("")
//Activity 4
//task 6
new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {
    resolve(`Promise Resolved randomly`);
  } else {
    reject(`Promise rejected randomly`);
  }
})
  .then((message) => {
    console.log(`Message From task 6 Promise: ${message}`);
  })
  .catch((message) => {
    console.log(`Message from task 6 Promise: ${message}`);
  });

//task 7
async function handleError() {
  try {
    let response = await new Promise((resolve, reject) => {
      if (Math.random() > 0.5) {
        resolve(`Promise Resolved randomly`);
      } else {
        reject(`Promise rejected randomly`);
      }
    });
    console.log(`Task 7 response: ${response}`);
  } catch (error) {
    console.error(`Error resolving the promise of task 7 :${error}`);
  }
}
handleError();

//Activity 5
//task 8
fetch("https://jsonplaceholder.com/users")
  .then((response) => {
    let data = response.json();
    data
      .then((data) => {
        console.log(data[0]);
      })
      .catch((err) => {
        console.log(`Invalid data `);
      });
  })
  .catch((message) => {
    console.error(`Error fetching data from given url : ${message}`);
  });

async function FetchDAta() {
  try {
    let response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    let data = await response.json();
    console.log(data[0]);
  } catch (err) {
    console.error(`Error fetching data from given url : ${message}`);
  }
}
FetchDAta();
