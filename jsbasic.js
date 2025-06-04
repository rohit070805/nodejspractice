// JAVASCRIPT BASICS

// var x = 10;
// let y = 2;
// const z = 1;

// /*
// x= "Rohit" or x= 20 both valid
// y = "Rohit" invalid,y = 10 is valid
// z= "rohit" or z= 20 both invalid
// */

// for(var i=0;i<10;i++){
//     console.log(i);
// }

const arr = [1,2,3,4];
console.log(arr);

// INTERVIEW QUESTIONS
// Filter function
arr.filter((x)=>{
    return x>2;
})


// Import data from Other file
// import {temp} from './temp';
// /*
// ye javascript me to chl jata qki browser
// ek faster hai pr node js me nhichlega
// node wali javascript purani hai thodi
// */

// New Method
const jsbasicshelper = require('./jsbasicshelper')
console.log(`${jsbasicshelper.temp}  ${jsbasicshelper.temp2} ${jsbasicshelper.sum(2,3)}`);
