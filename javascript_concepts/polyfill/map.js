// polyfill for map

Array.prototype.anuragMap = function (fn){
     let temp=[];
     for (let index = 0; index < this.length; index++) {
        temp.push(fn(this[index],index,this))
     }
     return temp;
}


let arr=[1,2,3,4,5,6,7,8,9,10]

arr.anuragMap((value,index,mainArray)=>{
    console.log(value,index,mainArray)
})