// A module for handling File system
const fs = require('fs');
// ye jo line hai process.argv vo command line argument ko handle karta hai
// jo bhi apn likhenge vo usko input variable me ek array ke form me store kra dega
// jaise ki ja run krte hai to likhte hai "node index.js"
// to ek 2 elements ki array bn jayegi jisme store hoga node ka address or us file ka address
// if we use {node ./index.js Hello.txt "Hello there"} to ek array bn jayegi
/*
input[0] =address of node
input[1] =address of file index.js
input[2] =Hello.txt
input[3] =Hello there
*/
const input = process.argv;
if(input[2]=="add"){
    fs.writeFileSync(input[3],input[4]);
}
else if(input[2]=="remove"){
    fs.unlinkSync(input[3]);
}
else{
    console.log("Invalid command");
}
console.log(input[0]);

/*
Run commands
node ./inputfromCommandline.js add Hello.txt "Hello There"
node ./inputfromCommandline.js remove Hello.txt
 */