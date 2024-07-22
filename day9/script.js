
    //Activity 1
    //task1
    function change(){
        document.getElementById("task1oldtext").innerHTML = "new text"
    }

    //task 2
    function changeBg(){
        document.getElementsByClassName("box")[0].style.backgroundColor = "cyan"
    }

    //task 3and 4
    function addElement(){
        let parent = document.querySelector("#act2")
        let child = document.createElement("div")
        let textnode = document.createTextNode("Hii I am added element")
        child.append(textnode)
        parent.append(child);
        
        let list = document.querySelector("ul");
        let newli = document.createElement("li")
        let textli = document.createTextNode("day after upper day")
        newli.append(textli);
        list.append(newli);
    }

    //act 3
    function removeIt(){
        let box = document.querySelector(".removeIt")
        box.remove();
        let ul = document.querySelector("#list2");
        let lastchld = ul.querySelector("li:last-child")
        ul.removeChild(lastchld)
    }
    function changeImage(){
        document.querySelector("#photoshop").src = "https://images.pexels.com/photos/3532551/pexels-photo-3532551.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
        console.log("chane")
    }
    function addcss(){
        document.querySelector("img").setAttribute("class","image")
    }
    function removecss(){
        document.querySelector("img").removeAttribute("class","image")
    }

    document.querySelector("#change").addEventListener("click",()=>{
        console.log("ellh")
       changetext();
    })
    function changetext(){
        document.querySelector("#mytext").innerHTML="https://images.pexels.com/photos/3532551/pexels-photo-3532551.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
    }

    document.querySelector("#box").addEventListener("mouseover",(e)=>{
        e.target.style.border = " 5px solid blue"
       
    })
    document.querySelector("#box").addEventListener("mouseout", (e)=>{
    
    // Resetting the border color on mouseout
    e.target.style.border = "";
});

