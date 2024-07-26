
import { add,subtract ,person,sumOfN} from "./modules.js";
import message from "./modules.js";
import * as modules from "./modules.js"
//Activity 1
//task 1
console.log(add(2,3));
//task 2
person.greet()

//Activity 2
//task 3
console.log(subtract(9,4))
console.log(sumOfN(4));
//task 4
console.log(message())

//Activity 3
//task 5
console.log(`Golden Ratio : ${modules.GOLDEN_RATIO}`)
console.log(`Speed of light : ${modules.SPEED_OF_LIGHT}`)
console.log(`Factorial of 5 is ${modules.factorial(5)}`);
console.log(`Multiplication of 23 and 34 is ${modules.multiply(23,34)}`);



//Activity 4
import _ from "lodash";
import axios from "axios";
//chunk function which split an array into chunks of a specified size.
const arr = [1,2,3,4,5,6,7,8,9];
const chunksOfArr = _.chunk(arr,3);
console.log(chunksOfArr);
let newArr = chunksOfArr.flat();
console.log(newArr);//same as arr

axios.get("https://sum-server.100xdevs.com/todos").then((Response)=>{
    console.log(Response.data.todos);
})


//Activity 5

