//Objects
//Activity 1
//task 1
let book = {
  title: "Who am I?",
  author: "unknown",
  year: "2029",
};
console.log(book);

//task 2
console.log(
  `Title of given book is ${book.title} and written by ${book.author} author`
);

//Activity 2
//task 3
book.bookInfo = function () {
  console.log(
    `Title of given book is ${book.title} and written by ${book.author} author`
  );
};
book.bookInfo();

//task 4
book.updateYear = function (year) {
  book.year = year;
};
book.updateYear(2034);
console.log(book.year);

//task 5
let library = {
  name: "MyLibrary",
  books: [
    {
      title: "the journey",
      author:"traveller",
      year:"2322"
    },
    {
        title:"the unhealed wound",
        author:"guy who suffered",
        year:"1874"
    }
  ],
  
};
console.log(library);

//task 6
console.log(` The name of library is ${library.name} and book present are `);
library.books.forEach((book)=>{
    console.log(book.title);

})

//Activity 4
//task 7
book.Info = function(){
    console.log(`title: ${this.title} and author: ${this.author}`)
}
book.Info()

//Activity 5
//task 8
for (const prop in book) {
    if (book.hasOwnProperty.call(book, prop)) {
        const element = book[prop];
        console.log(`${prop} : ${element}`)
        
    }
}

//task 9
let keysInBook = Object.keys(book)
console.log(keysInBook)
let valuesInBook = Object.values(book);
console.log(valuesInBook);



//entries,assign and defineProperty
console.log(Object.entries(book))

let newob = {}
Object.assign(newob,book);
console.log(newob)


Object.defineProperty(book,"edition",{
    value:"2021",
    writable:true,
    enumerable:true,
    configurable:true
})
console.log(book)