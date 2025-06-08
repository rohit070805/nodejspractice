const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,"files");
for(var i =0;i<5;i++){
    fs.writeFileSync(`${dirPath}/File${i}.txt`,"A simple text file");
}

// Prints in form of an array
fs.readdir(dirPath,(err,files)=>{
    console.log(files);
})

// Prints one by one
fs.readdir(dirPath,(err,files)=>{
    files.forEach((file)=>{
            console.log(file);
    })
})

// for(var i =0;i<5;i++){
//     fs.unlinkSync(`${dirPath}/File${i}.txt`);
// }