const http = require("http");
// createServer() takes a complete fn as a parameter

http.createServer((req,res)=>{
    res.write("Hello this is node js");
    res.end();    
}   
).listen(4500);

// niche wale function ka naam bhi pass kr skte hum agr arrow function use nhi krna
function dataControl(res,res){
    res.write("Hello this is node js");
    res.end(); 
}
// This is how to write arrow function.
const dataControl2= (res,res)=>{
 res.write("Hello this is node js");
    res.end(); 
}

// Explanation of Server
// 1** server is our node js app we can say
// 2** server is a program that runs on a computer and listens for incoming requests from clients
// 3** client apna browser page hai jisme localhost 4500 kholte hi vo ek req generate krega
// 4** req me client ka url,herder vagaira vagaira hoga
// 5** hr bar req aate hi server us arrow function ko hit kr dega or jo resp designed hoga vo bhej dega