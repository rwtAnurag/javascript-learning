// Debouncing in javascript
var counter=0;
const getData=(value)=>{
    // to get data from api
    console.log("fetching data...",counter++,"value",value)
}
// const debounce =(fn, duration)=>{
//     let timer;
//     return function(){
//         if(timer) 
//           clearTimeout(timer)
//         timer = setTimeout(()=>{
//             fn(...arguments)
//         },duration)
//     }
// }

function debounce (fn, duration){
    let timer;
    return function(){
        let context=this;
        args=arguments;
        console.log("print this",args)
        clearTimeout(timer)
        timer = setTimeout(()=>{
            getData.apply(context,args)
        },duration)
    }
}
const handleInput = debounce(getData, 500);



















