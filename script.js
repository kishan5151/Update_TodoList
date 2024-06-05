let inputBx= document.getElementById("inputBx");
let list=document.getElementById("list");

inputBx.addEventListener("keyup",function(event){
    if(event.key == "Enter"){
        addItem(this.value);
        this.value = "";
    }
})

let addItem = (item)=>{
    let listTag= document.createElement("li");
    if(item == ""){
        alert("Enter task");
    }
    else{
    listTag.innerHTML=`${item} <i></i>`;

    //toggle class
    listTag.addEventListener("click", function(){
        this.classList.toggle("done");
    })

    listTag.querySelector("i").addEventListener("click",()=>{
        listTag.remove();
    })

    list.appendChild(listTag);
    }
    
}