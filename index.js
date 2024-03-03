// EXAMPLE 1 - Get a Value of an Object by Index in JavaScript

const obj = {country: 'Chile', name: 'bobby hadz'};

const firstValue = Object.values(obj)[0];
console.log(firstValue); // 👉️ "Chile"

const firstKey = Object.keys(obj)[0];
console.log(firstKey); // 👉️ "country"

// ------------------------------------------------------------------

// // EXAMPLE 2 - Get an Object's Key by Index in JavaScript

// const obj = {number: 5, color: 'blue'};

// const secondKey = Object.keys(obj)[1];
// console.log(secondKey); // 👉️ "color"

// ------------------------------------------------------------------

// // EXAMPLE 3 - Get a Value of an Object by Index using Object.keys()

// const obj = {country: 'Chile', name: 'bobby hadz'};

// const keys = Object.keys(obj);

// console.log(obj[keys[0]]); // 👉️ Chile
