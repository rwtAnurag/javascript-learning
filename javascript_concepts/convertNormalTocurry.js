


function curry(func){
    return function curriedFunc(...args){
        console.log(args.length,func.length)
        if(args.length>=func.length){
            return func(...args)
        }else{
            return function(...next){
                return curriedFunc(...args,...next)
            }
        }
    }
     
}





const sum = (a, b, c, d) => a + b + c + d; 
const totalSum = curry(sum)

console.log(sum.length)