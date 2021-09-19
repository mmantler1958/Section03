//  Pizza Place Functions
//  Step 1
const pizzaToppings = ['shrimp', 'ham', 'mushroom', 'onion'];
//   Step 9 BONUS
function listToppings(toppingsArray) {
  let toppingString = "Our toppings are ";
  let lastTopping = toppingsArray.length - 1;
  let secondToLastTopping = lastTopping - 1;
  // Cases for toppingsArray
  // Zero (0) toppings (empty array)
  //  if zero dont loop array and return "no toppings" 
  //  else loop  
  //    add array value to toppingString
  //    if 
  // 
  
  for (let i = 0; i <= secondToLastTopping;i++ ) {
      lastTopping+=toppingsArray[i] 
  }
 
  return toppingsString;
}
listToppings(pizzaToppings);
console.log(listToppings(pizzaToppings));
console.log(pizzaToppings);