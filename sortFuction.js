// Sort function sort letters, but don't sort numbers
// Example on letters:

let letters = ['a','b','c','d','e','f' ,'g', 'h' ,'i', 'j', 'k' ,'l', 'm', 'n' ,'o', 'p' ,'q', 'r', 's', 't', 'u' ,'v', 'w' ,'x' ,'y' ,'z'];
let reversedArray = letters.reverse();

console.log("Reversed: " + reversedArray);
console.log("Sorted: "+reversedArray.sort());

// Example for numbers
let numbers = [12,8908097,4544,121,78678,44,9,0,1,-100];

console.log("Wrong Sort: "+ numbers.sort());

let correctSort = numbers.sort((a,b)=>{
  if(a>b){
    return 1;
  }
  if(a<b){
    return -1;
  }
});

console.log("Correct Sort: "+ correctSort);


