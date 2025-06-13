const express = require('express')
const path = require('path')

// path is udes to get the path
const app = express();
const publicPath=path.join(__dirname,"public");
// The urls will be like http://localhost:4000/

app.get('/',(_,resp)=>{
    resp.sendFile(`${publicPath}/home.html`)
})

// The urls will be like http://localhost:4000/about
// Extension .html is remove here
app.get('/about',(_,resp)=>{
    resp.sendFile(`${publicPath}/about.html`)
})

// Error 404 wala page
// upr walo me se kuch na hua url me to ye aayega
app.use((req, res) => {
    res.sendFile(`${publicPath}/nopage.html`);
});

// In older node js we could use
// app.get('*',(_,resp)=>{
//     resp.sendFile(`${publicPath}/about.html`)
// })

app.listen(4000);

