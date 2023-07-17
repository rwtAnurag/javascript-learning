

Array.prototype.myReduce = function (cb, intialvalue){
      let accumulator = intialvalue;

      for (let index = 0; index < this.length; index++) {
        accumulator = accumulator ? cb(accumulator,this[index],index,this) : this[index]
      }
    return accumulator;
}

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.myReduce(
  (accumulator, currentValue) => { return accumulator + currentValue},
  initialValue
);

console.log(sumWithInitial);