

Array.prototype.myFind = function(cb){
     let temp;
     for (let index = 0; index < this.length; index++) {
         if(cb(this[index], index, this)){
             temp=this[index];
         }
     }
     return temp;
}

let arr= [1,2,3,4,5,6,7,8,9,10]
let value = arr.myFind((ele)=> ele===10)

console.log(value)