const pizzaToppings = ['shrimp', 'ham', 'mushroom', 'onion'];
let pizzaPlace = 'Imos';
let greeting = `Welcome to ${pizzaPlace} our toppings are ${pizzaToppings}`;
let crust = ['thick', 'original', 'thin'];
let size = ['small', 'medium', 'large'];
const pizzaObject = {
  toppings: pizzaToppings,
  crust: crust,
  size: size,
};
function greetCustomer() {
  console.log(greeting);
}


function getPizzaOrder(size, crust, ...toppings) {
  pizzaObject.size = size;
  pizzaObject.crust = crust;
  pizzaObject.toppings = toppings;
  console.log(
    `One ${pizzaObject.size} ${pizzaObject.crust} crust pizza with ${pizzaObject.toppings} coming up!`
  );
}
function listToppings(pizzaToppings) {
  
  return
}
function preparePizza([size, crust, ...toppings]) {
  pizzaObject.size = size;
  pizzaObject.crust = crust;
  pizzaObject.toppings = toppings;
  console.log('...cooking pizza');
  console.log(
    'size=',
    pizzaObject.size,
    'crust=',
    pizzaObject.crust,
    'topping=',
    pizzaObject.toppings
  );
}
 


greetCustomer();

getPizzaOrder('large', 'thick', 'ham', 'sausage',"onion");
preparePizza(['large', 'thick', 'ham', 'sausage', 'onion']);

function servPizza(pizzaObject) {
  console.log(
    `Order up! Here's your ${pizzaObject.size} ${pizzaObject.crust} pizza with ${pizzaObject.toppings}...Enjoy`
  );
  console.log('pizzaObject=', pizzaObject);
}

//BONUS
// Bonus Challenge
// Figure out how to add "and" before the last topping in a list of toppings so when we list toppings it is more grammatically correct. You could create a listToppings function that stores the functionality, and call the function each time we list toppings in a function.
// i.e. "Our toppings are a, b, and c." instead of "Our toppings are a, b, c"
// In getPizzaOrder, if an order is placed with no toppings, print a slightly different message, like "One large thick crust cheese pizza coming up!" (Instead of "One large thick crust pizza with coming up!"). Alter servePizza in a similar way to fix its grammar when serving a "plain" cheese pizza.
// In getPizzaOrder, check the toppings the customer ordered against your list of available toppings. If they order a topping you don't offer, print a message that informs them you don't offer that topping and to order again.
// An example output for this assignment is:

// Welcome to The Pizza House, our toppings are: pepperoni, sausage, onions, peppers, One large thin crust pizza with sausage, onions, peppers, . Coming up! ...your pizza is cooking... Order up! Here's your large thin crust pizza with sausage, onions, peppers, . Enjoy!

// {
//   size: 'small',
//   crust: 'thin',
//   toppings: [ 'mushrooms', 'banana peppers' ]
// }
