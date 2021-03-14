
// Example on letters:
let letters = ['a','b','c','d','e','f' ,'g', 'h' ,'i', 'j', 'k' ,'l', 'm', 'n' ,'o', 'p' ,'q', 'r', 's', 't', 'u' ,'v', 'w' ,'x' ,'y' ,'z'];
let reversedArray = letters.reverse();

console.log("Sorted: "+reversedArray.sort());

// Example for numbers
let numbers = [12,8908097,4544,121,78678,44,9,0,1,-100];
let correctSort = numbers.sort((a,b)=>a-b);

console.log("Correct Sort: "+ correctSort);


