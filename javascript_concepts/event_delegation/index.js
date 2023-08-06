document.querySelector("#form").addEventListener("keyup",(e)=>{
    console.log("Parent click",e.target.value)
    if(e.target.dataset !== undefined) {
        e.target.value = e.target.value.toUpperCase();
    }
})