// Core modules are those which are provided by nodejs to use

// Global core modules
// no need to import anything can be used directly
console.log("Hello");

// Non Global Modules
// Neede to be imported
const fs = require('fs');
fs.writeFileSync("hello.txt","hey this is for modules explanation");

// Interview Question
// can we import onnly onr fn from file st=ystem instead of complete file system,ans is yes

const fs1 = require("fs").writeFileSync;
fs1("hey.txt","hiii");