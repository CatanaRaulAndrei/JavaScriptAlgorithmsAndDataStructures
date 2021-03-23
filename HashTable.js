// Hash Table Implementation

class Hash_Table {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
      // console.log(i, +"" + hash);
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (this.data[address]!==0) {
      this.data[address] = [];
    }
       this.data[address].push([key, value]);
       return this.data;
  }
  get(key){
    let address = this._hash(key);
    let currentBucket = this.data[address];
    //console.log(this.data[address][0][0]);
    if(currentBucket!==0){
      for(let i=0;i<currentBucket.length;i++){
        if(currentBucket[i][0]===key){
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }
  keys(){
    const keysArr = [];
    for(let i=0;i<this.data.length;i++){
      if(this.data[i]){
        // console.log(this.data[i]);
        keysArr.push(this.data[i][0][0]);
      }
    }
    return keysArr;
  }
  values(){
    const keysArr = [];
    for(let i=0;i<this.data.length;i++){
      if(this.data[i]){
        // console.log(this.data[i]);
        keysArr.push(this.data[i][0][1]);
      }
    }
    return keysArr;
  }
}

// this.data[address_bucket][bucket][select_from_bucket(0/1)]
/*                                      0 / 1
  General Form : address_bucket -> [ [key,value] ]
  0 -> [ [key0,value0] ]               bucket 
  1 -> [ [key1,value1] ]
  2 -> [ [key2,value2] ]
  ...................... 
  n -> [ [keyn,valuen] ]
 */
const myHashTable = new Hash_Table(50);
// myHashTable.set('hello',10000); // hello : 10000

// myHashTable.get('hello'); // return 10000 
// Test _hash()
// console.log("Return",myHashTable._hash("hello")); // return an integer value

myHashTable.set('grapes',100);
myHashTable.set('appels',200);
myHashTable.set('lemons',500); // [ ['lemons',500] ]
myHashTable.set('carrots',90);
myHashTable.set('levanda',70);
myHashTable.set('orange',900);
myHashTable.get('appels');
console.log(myHashTable.values());
myHashTable.keys();
// testing running time of a line of code 
/*
var start = new Date().getTime();
var end = new Date().getTime();
var time = end - start;
alert('Execution time: ' + time);
*/


