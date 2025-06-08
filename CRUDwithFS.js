const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,"crud");
const filePath = path.join(dirPath,"file1.txt");
//fs.writeFileSync(filePath,"This is file 1");
// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item);
// })

// fs.appendFile(filePath,"and now its appednded",(err)=>{
//     if(err) console.log(err);
// });

// fs.rename(filePath,`${dirPath}/File2.txt`,(err)=>{
//     if(err) console.log(err);
// });

fs.unlinkSync(`${dirPath}/File2.txt`);