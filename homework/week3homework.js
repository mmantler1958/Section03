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
//greetCustomer();

function getPizzaOrder(size, crust, ...toppings) {
  pizzaObject.size = size;
  pizzaObject.crust = crust;
  pizzaObject.toppings = toppings;
  console.log(
    `One ${pizzaObject.size} ${pizzaObject.crust} crust pizza with ${pizzaObject.toppings} coming up!`
  );
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

getPizzaOrder('large', 'thick', 'ham', 'sausage');
preparePizza(['large', 'thick', 'ham', 'sausage']);

function servPizza(pizzaObject) {
  console.log(
    `Order up! Here's your ${pizzaObject.size} ${pizzaObject.crust} pizza with ${pizzaObject.toppings}...Enjoy`
  );
  console.log('pizzaObject=', pizzaObject);
}

servPizza(pizzaObject);
