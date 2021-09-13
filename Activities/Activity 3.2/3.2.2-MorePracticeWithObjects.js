// bracket and dot notation
const key = '1';
const obj = {
  key: console.log("the key is 'key'"),
  1: console.log('the key is 1'),
};
// what will the following lines print?
obj[key];

obj.key;

obj['key'];

//Prints out:
// the key is 'key'
// the key is 1

// create an object with at least four properties, each with a different data type
// name one of the four properties "collection" and set its value to an Array or Object

let myObj = {
  prop1: 1,
  prop2: 'hello',
  prop3: true,
  collection: ['a', 'b', 'c'],
};

// access a value in in "collection" property
console.log(myObj.collection[0]);
// Nested Arrays and Objects
const keys = ['key', '1', 'method', 'favorites', 'list'];
// console.log(keys);
obj.method = function () {
  //  return "the key is 'method' and it calls refers to a function";
  return `the key is 'method' and it call refers to a function`;
};
// fill in your favorite movie and color below
obj['favorites'] = {
  movie: '007',
  number: 14,
  color: 'red',
};
obj.list = ['a', 'b', 3, 'd', ['e', 4, 5], { f: 6 }];

// how many lines will the following for...of statement print?
// It will print 5 lines
// what do you expect to see on each line?
//
for (let akey of keys) {
  console.log('key test', akey);
  console.log(`Key is: ${akey} and value is: ${obj[akey]}`);
}
// use a template literal to print a sentence about your favorite movie and color

// access the values "b", 4, and 6 from obj.list
