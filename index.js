const parentElement = document.getElementById("parent");
const child = document.getElementById("child");
const subchild = document.getElementById("subchild");

const handleClickChild =()=>{
    console.log("child")
}

const handleClickParent =()=>{
    console.log("parent")
}

const handleClickSubChild =()=>{
    console.log("sub child")
}

parentElement.addEventListener("click",handleClickParent,false)
child.addEventListener("click",handleClickChild,true)
subchild.addEventListener("click",handleClickSubChild,true)

