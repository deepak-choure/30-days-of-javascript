//activity 1
//task 1
function error() {
  try {
    throw new Error();
  } catch (err) {
    console.error(`Some ERROR occured : ${err}`);
  }
}
// error();

//task 2
function divide(a, b) {
  try {
    if (b == 0) {
      throw new Error("Can't divide from 0");
    }
    return a / b;
  } catch (error) {
    console.error(`Error occured in division ${error} `);
  }
}
// console.log(divide(2, 0));

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
// temp();

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
  throw new CustomError(`CustomERRor from  function`);
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
        throw new CustomError(" Input is Empty ")
    }
    console.log(`Input validated successfully`)

  } catch (error) {
    console.log(`Error occured while validating input,Error:${error.message}`)
  }
}
// validateUserInput("")
//Activity 4
//task 6
new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {
    resolve(`Promise Resolved `);
  } else {
    reject(`Promise rejected `);
  }
})
  .then((message) => {
    console.log(`Message From task 6 Promise: ${message}`);
  })
  .catch((err) => {
    console.log(`Message from task 6 Promise: ${err}`);
  });

//task 7
async function handleError() {
  try {
    let response = await new Promise((resolve, reject) => {
      if (Math.random() > 0.5) {
        resolve(`Promise Resolved `);
      } else {
        reject(`Promise rejected `);
      }
    });
    console.log(`Task 7 response: ${response}`);
  } catch (error) {
    console.error(`Error resolving the promise of task 7 :${error}`);
  }
}
// handleError();

//Activity 5
//task 8
fetch("https://jsonplaceholder.com/users")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(`Inappropriate Response`);
    }
  })
  .then((response) => {
    console.log(response[0].name);
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
    console.error(`Error fetching data from given url : ${err}`);
  }
}
// FetchDAta();
