const mysql = require('mysql');

const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'test'
});
con.connect((err)=>{
    if(err){
        console.log('error');
    }
    else{
        console.log('connected');
    }
})
con.query('SELECT * FROM users', (err, result) => {
    if (err) console.warn(err);
    else{
        console.log(result);
    }
})
