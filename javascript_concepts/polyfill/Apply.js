


Function.prototype.myApply = function (context={}, args=[]) {
    if(typeof this !== "function"){
        throw new Error(this + "is Not a Function")
    }
    if(!Array.isArray(args)){
        throw new Error("you are not passing argument as an array")
    }
    context.fn = this;
    context.fn(...args)     
}