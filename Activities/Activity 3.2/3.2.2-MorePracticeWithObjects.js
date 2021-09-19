// bracket and dot notation
const key = '1';
const obj = {
  key: console.log("the key is 'key'"),
  1: console.log('the key is 1'),
};
// what will the following lines print?
obj[key];     //  Output: the key is 'key'
 
obj.key;      //  Output: the key is 1
 
obj['key'];   //  Output: No output is produced
 
// create an object with at least four properties, each with a different data type
const myObj = {
  aString: "hello",
  aNumber: 99,
  aBoolean: true,
  acollection: {p1: "a", p2:"b",p3:"c"}
}
// name one of the four properties "collection" and set its value to an Array or Object
myObj.acollection = [11,22,33,44]

// access a value in in "collection" property
console.log(myObj.acollection[2])
// Nested Arrays and Objects
const keys = ['key', '1', 'method', 'favorites', 'list'];
obj.method = function () {
  return "the key is 'method' and it calls refers to a function";
};
// fill in your favorite movie and color below
obj['favorites'] = {
  movie: 'James Bond',
  number: 7,
  color: 'Blue',
};
obj.list = ['a', 'b', 3, 'd', ['e', 4, 5], { f: 6 }];

// how many lines will the following for...of statement print?
// what do you expect to see on each line?
for (let key in keys) {
  console.log(`Key is: ${key} and value is: ${obj[key]}`);
}
//Expected output:
    //Key is: 0 and value is: undefined
    // Key is: 1 and value is: undefined    
    // Key is: 2 and value is: undefined    
    // Key is: 3 and value is: undefined    
    // Key is: 4 and value is: undefined
// use a template literal to print a sentence about your favorite movie and color
console.log(`My favorite movies are ${obj['favorites'].movie} and my favorite color is ${obj['favorites'].color}.`)
// access the values "b", 4, and 6 from obj.list
