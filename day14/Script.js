//Activity 1 :Class Definition
//task 1:define a class {Person} with properties name and age ,and a method to return a greeting message.
//create an instance of the class and log the greeting message.
class Person {
    constructor(firstname,lastname,age){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;

    }
    //method
    sayHii(){
        console.log(`Hii, my name is ${this.firstname} ${this.lastname} and I am ${this.age} years old.`);
    }
    updateAge(newAge){

        this.age = newAge;
    }
    //static greet(task 5)
    static genericGreetMsg(){
        console.log(`Hii I am person class `)
    }


    //Getter method
    get fullname(){
        return `${this.firstname} ${this.lastname}`;
    }

    //Setter method
    set fullname(fullname){
        const parts = fullname.split(" ");
        if(parts.length === 2){
            this.firstname = parts[0];
            this.lastname = parts[1];
        } else{
            console.error("Invalid name format");
        }

    }
}

//creating an instance
const Person1 = new Person("Hitesh","choudhary",32);
Person1.sayHii();

/************task 2************/
Person1.updateAge(30);
console.log(Person1.age);


/*************Activity 2***************** */
class Student extends Person{//task 3
    static  counter =0;
    constructor(firstname,lastname,age,studentId){
        super(firstname,lastname,age);//Call the constructor of parent class 
        this.studentId = studentId
        //static property incremented each time new instance created
        Student.counter++;
    }

    getId(){
        return this.studentId;
    }
    //overriding sayHi(task 2)
    sayHii(){
        console.log(`Hello, my name is ${this.firstname} ${this.lastname}, I am ${this.age} years old,and my student id is ${this.studentId}`)
    } 
  
   
    
}
//Creating Student instance which have property of Person as well
const Student1 = new Student("Alice",19,"0101EC221042");
console.log(Student1.getId());
//task4
Student1.sayHii();

/***************Activity 3 **************/
Person.genericGreetMsg();

//task 6
const Student2 = new Student("Bob",21,"2341RU032903")
const Student3 = new Student("Charlie",24,"5747RI938232")
const Student4 = new Student("Darek",26,"2939FG937403")
console.log(Student.counter);

/****************Activity 4*********** */
const Person2 = new Person("John","Don",23);
console.log(Person2.fullname);//getter allow method to access like property

Person2.fullname = "Chhota Bheem";//setter
console.log(Person2.fullname);//getter


/****************Activity 5************/
class Account{
    //private 
    #balance;
    constructor(balance){
        this.#balance = balance;
    }
    //manipulation method
    deposite(amt){
        if(amt>0){
            this.#balance +=amt;
            console.log(`The amount of ${amt} is deposited successfully. Clr bal: ${this.#balance}`);
        } else{
            console.log(`Enter amount more than zero`);

        }
    }
    withdraw(amt){
        if(amt>0 && amt <= this.#balance){
            this.#balance -= amt;
            console.log(`The amount of ${amt} is withdrew successfully. Clr bal: ${this.#balance}`);
        } else{
            console.error(`Enter valid amount`);
        }
    }
}

const account = new Account(10000);
account.deposite(3000);
account.withdraw(200);
// account.#balance; //not accessible outside class

