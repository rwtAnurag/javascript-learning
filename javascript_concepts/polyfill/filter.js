// polyfill for filter function
let arr =[1,2,3,4,5,6,7,8,9,10]

Array.prototype.myFilter = function(cb){
    let temp=[];
    for (let index = 0; index < this.length; index++) {
        if(cb(this[index], index, this)){
            temp.push(this[index])
        } 
    }
    return temp;
}
const flag = arr.myFilter((val,index,arrayData)=>{
    return val === 10
})

console.log(flag)