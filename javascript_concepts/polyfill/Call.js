


Function.prototype.myCall = function (context={}, ...args) {
        if(typeof this !== "function"){
            throw new Error(this + "is Not a Function")
        }
        context.fn = this;
        context.fn(...args)
}