// package.json file keeps details of our project
// like name,packages, version, dependencies, scripts etc.
// Steps
// run command npm init
// fill all details,package.json will be created
// agr koi error aata hai to open powershell as administrator and run
// Set-ExecutionPolicy -S   cope CurrentUser -ExecutionPolicy RemoteSigned
// package.json will be created

// Now uske andr sb deatils hongi project ki
// Dependencies me packages ki details hongi
// or ek folder bhi bnn jayega apne aap node-modules ke naam se
// Jisme in packages ys fir unke help modules ki file pdi hongi
// ise github pe nhi dalna hota .gitignore file me daldo

/*
Ek package-lock.json bhi bni hogi
isme sare packages ki sari details hongi  like version vagaira url vagaira
isko delete kr skte hai wapis aajayegi
*/

// **package.json delete nhi kr skte

// Colors package:
const colors = require('colors');
console.log("hii".blue);

// **interview question
// node js is single threaded
// Node js is async language

/* If we delete node-modules folder 
just run "npm install" command it will pe created again
using dependencies in package.json
*/

/*
Nodemon is like hot start save krte hi nye wala run
Nodemon use krne ke liye
 nodemon ./lec8packages.js
 normal run ke liye
  node ./lec8packages.js
*/

