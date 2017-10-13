function fizzbuzz(fizz,buzz,endPoint){
let fizzy = fizz || 3
let buzzy = buzz || 5
let endPointy = endPoint || 100

for(let i = 1; i<=endPointy; i++){
   let output = ''
   if(i % fizzy===0){
       output +='fizz'
   }
   if(i%buzzy===0){
       output +='buzz'
   }
   if(output===''){
       output += i
   }
   console.log(output)
}
}

fizzbuzz()