 
 function findMax(){
  let max = -Infinity;
  for(let i=0; i<arguments.length; i++){
    if(arguments[i]>max){
      max = arguments[i];
    }
  }
  return max;
 }

 console.log(x=findMax(124,423,1231,1342,0,342));
 console.log(x=findMax(1223,42133,51231,71342,99990,34642));


 