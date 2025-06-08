// The API that will be created is localhost:4000
const http = require('http');
http.createServer((req,resp)=>{
    // this line will tell client rhat server is sending json type of data with status code 200

resp.writeHead(200,{'Content-Type':'application/json'});

// This is the json data that will be sent 
// it is Stringified because HTTP can only receive string data
// so this will conver javascript object or array to a string that can be
// used as http response and parsed according to further usage.
var data =   JSON.stringify([
    {name:"ROhit kumar",email:"rrrr"},
    {name:"kumar",email:"rrrr"},
    ]);
resp.write(data);

resp.end();
}).listen(4000);