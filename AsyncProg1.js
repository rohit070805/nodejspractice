var a=10;
var b = 20;
var c= 30;
console.log(a);

setTimeout(()=>{
     console.log(b);
    // this is the problem if we set c = 100,
    // then it will be set after time and printed will be 30
    c = 100;
       
    },2000);
console.log(c);
console.log()