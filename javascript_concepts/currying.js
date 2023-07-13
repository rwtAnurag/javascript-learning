// currying function


// 1. using bind function

const multiply1 = (x, y)=>{
      console.log(x*y)
}

const multiplyByTwousingBind = multiply1.bind(this,2);
multiplyByTwousingBind(8);

// using closure

function multiply2 (x){
    return function (y){
           console.log(x*y)
    }
}

const multiplyByTwoUsingCloseer =  multiply2(2)
multiplyByTwoUsingCloseer(5)



