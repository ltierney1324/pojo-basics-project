/***********************************************************************
Write a function called `keysInObject(obj)` that takes in an object and returns
an array of all the keys within that Object.

Do this once using using a `for...in` loop and once using `Object.keys`.

Examples:

let animals = {dog: 'Wolfie', cat: 'Jet', bison: 'Bilbo'}
let foods = {apple: 'tart', lemon: 'sour', mango: 'sweet'}
keysInObject(animals); // => ["dog", "cat", "bison"]
keysInObject(foods); // => ["apple", "lemon", "mango"]
***********************************************************************/

function keysInObject(obj) {
<<<<<<< HEAD
  //Your code here 

    let keys = [];
=======
  // Your code here
      let keys = [];
>>>>>>> c13bcab3607ecddc8861387b375f04ddba0765d5
    for (let key in obj) {
      keys.push(key);
    }
    return keys;
  };


// let animals = {dog: 'Wolfie', cat: 'Jet', bison: 'Bilbo'}
// let foods = {apple: 'tart', lemon: 'sour', mango: 'sweet'}
// console.log(keysInObject(animals)); // => ["dog", "cat", "bison"]
// console.log(keysInObject(foods)); // => ["apple", "lemon", "mango"]


// const keysInObject = (obj) => Object.keys(obj);

// let animals = {dog: 'Wolfie', cat: 'Jet', bison: 'Bilbo'}
// let foods = {apple: 'tart', lemon: 'sour', mango: 'sweet'}
// console.log(keysInObject(animals)); // => ["dog", "cat", "bison"]
// console.log(keysInObject(foods)); // => ["apple", "lemon", "mango"]


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keysInObject;
