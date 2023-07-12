// Throttling in javascript
var counter=0;
const getData=(value)=>{
    // to get data from api
    console.log("fetching data...",counter++)
}

throttle = (callback,delay) =>{
    let iswait=false
    console.log(iswait)
    return function (){
        if(iswait) return;
        callback(...arguments)
        iswait=true;
        setTimeout(()=>{
            iswait=false
        },10000)
    }
}

const handleInput = throttle(getData, 1000);




















