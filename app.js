// 1
const array1 = [13, 87, 2, 89, 12, 4, 90, 63];
const array2 = array1.map((currentElement) => {
    return currentElement * 2;
  });
console.log(array2);


// 2
// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaArray = ['Pineapple', 'Olives', 'Anchovies'];
const [firstPizza, secondPizza] = pizzaArray;

console.log(pizzaArray[0]);
console.log(pizzaArray[1]);


// 3

const car = {
    make: 'Audi',
    model: 'q5',
  };

  const {make, model} = car;

  console.log(make);
  console.log(model);

  // Equivalent in traditional dot notation:
  console.log(car.make);
  console.log(car.model);

// 4

const toppingsArray = ['Pineapple', 'Olives', 'Anchovies'];
const duplicateArray = [...toppingsArray];

console.log(duplicateArray);


5
Duplicate the following object and spread its values into a new variable `myCar`.

const car = {
    make: 'Audi',
    model: 'q5',
  };
  
  // Using the spread operator to create a new object `myCar` with the same properties as `car`
  const myCar = {
    ...car,
    model: 'q7', // Overriding the model property with 'q7'
  };
  
  // Logging both objects to see the difference
  console.log('Original car object:', car);
  console.log('New myCar object:', myCar);
  
// 6
  const userProfile = 'propertyName';
  const userAge = {
    [userProfile]: 20,
  };

  console.log(userAge);

// 7


// 8
function describeAnimal(noun = 'cat', adjective = 'white') {
    console.log(`The ${noun} is ${adjective}.`);
  }
  
  // Example usage:
  describeAnimal(); // Logs: "The cat is white."
  describeAnimal('dog', 'brown'); // Logs: "The dog is brown."
  describeAnimal('bird'); // Logs: "The bird is white."
  describeAnimal(undefined, 'black'); // Logs: "The cat is black."
  
//9
let pizza = 'tasty';

console.log(pizza === 'tasty' ? 'yum' : 'yuck');

//10
const localLangConfig = null;  // Change to 'es', 'fr', etc., or keep it null
const LANG = localLangConfig || 'en';

// Log the result
console.log('Language setting:', LANG);

//11
const userSavedTheme = null; // Change to 'dark', 'contrast', etc., or keep it null
const USER_THEME = userSavedTheme || 'light';

// Log the result
console.log('User theme setting:', USER_THEME);

