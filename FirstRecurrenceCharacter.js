// First Recurring Character
function firstRecurringCharacter(input){
  let map={};
  for(let i=0;i<input.length;i++){
    if(map[input[i]]!==undefined){
      return input[i];
    }
    else{
      map[input[i]]=i;
    }
     console.log(map);
  }
  
  return undefined;
}
// [2,5,1,2,3,5,1,2,4] return 2
// [2,1,1,2,3,5,1,2,4] return 1
// [2,3,4,5] return undefined

firstRecurringCharacter([2,1,1,2,3,5,1,2,4]);
