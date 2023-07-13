

// function sum(a){
//     return function (b) {
//         return function (c) {
//             return function (d) {
//                 return function (e) {
//                        return a+b+c+d+e;
//                 }
//             }
//         }
//     }
// }

// using recursion


const sum = (a)=>{
    return function(b){
        if(b){
           return sum(a + b)
        }
        return a;
        
    }
} 

    

const sum_value =sum(1)(2)(3)(4)(5)()
console.log(sum_value)