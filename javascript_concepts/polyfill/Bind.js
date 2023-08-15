Function.prototype.myBind = function (context={}, ...args) {
    if(typeof this !== "function"){
        throw new Error(this + "is Not a Function")
    }
    context.fn = this;
    // context.fn(...args) 
    return function (...newArgs){
        return context.fn(...args, ...newArgs);
    };
};