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