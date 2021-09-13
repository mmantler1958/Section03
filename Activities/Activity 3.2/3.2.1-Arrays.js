// create an Array using an Array literal
let arr = [1, 2, 3, 4];
// access the 1st item in the Array
let firstItem = arr[0];
console.log('firstItem=', firstItem);
// access the last item in the Array
let lastItem = arr[arr.length - 1];
console.log('lastItem=', lastItem);
// print the length of the Array
console.log('array length=', arr.length);
// use the length property to access the last item in the Array
//see line 7
let newArr = [];
// with for...of, loop over the Array, modify the value and add to a different Array
for (let item of arr) {
  newArr.push(item + 20);
}
// newArr.push(55)
console.log('New array from initial array', newArr);
