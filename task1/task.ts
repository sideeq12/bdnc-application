export  {}
function testValue(a : number){
    if(a%22 === 0)
         return "candaybar"
    if(a%11 === 0)
         return "bar"
     if(a%2 === 0)
         return "candy"
     return a
 }
 console.log(testValue(66)) //result : "candybar"

 //Replacing the nested with guard clause method to optimie the performance