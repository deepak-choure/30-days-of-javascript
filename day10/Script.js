let para = document.getElementById("para")
document.getElementById("btn").addEventListener("click",()=>{
    para.innerText = "New content"
})


let photo = document.getElementById("photo")
photo.addEventListener("dblclick",()=>{
    photo.style.visibility ="hidden"
})
document.getElementById("border").addEventListener("click",()=>{
    photo.style.visibility = ""
})


let box = document.getElementById('box')
box.addEventListener("mouseover",()=>{
    box.style.backgroundColor ="rgb(0, 255, 119)"

})
box.addEventListener("mouseout",()=>{
    box.style.backgroundColor = ""
})

let input = document.getElementById("inputprint")
input.addEventListener("keydown",(e)=>{
    
        console.log(e.target.value)
})


let paragraph = document.getElementById("keyup")
paragraph.addEventListener("keyup",()=>{
    document.getElementById("pg").innerText = paragraph.value;

})

let form = document.getElementById("frm");
form.addEventListener("submit",(e)=>{
e.preventDefault()
console.log(document.getElementById("fname").value)
})

let myselect = document.getElementById("mySelect");
myselect.addEventListener("change",(e)=>{
    document.getElementById("display").textContent = `Selected value : ${e.target.value}`
})

let myList = document.getElementById("myList")
myList.addEventListener('click',(e)=>{
    console.log(e.target.textContent)
})

let newLi = document.createElement("li")
let text = document.createTextNode("This is dynamically added list index")
newLi.appendChild(text);
myList.appendChild(newLi);