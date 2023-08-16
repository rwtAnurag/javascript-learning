<<<<<<< HEAD
console.log(1)

new Promise((resolve)=>{
  setTimeout(()=>{
    console.log(2)
  })
  resolve()
}).then(()=>{
  setTimeout(()=>{
    console.log(3)
  })
})
=======
let obj = {
  abc:"anurag, sutanu",
  
}
let nameP=  obj.abc.split(", ")

console.log(nameP[0])
console.log(nameP[1])

>>>>>>> d8001a4cda4d2043faeef6c92b9b7689a654f862
