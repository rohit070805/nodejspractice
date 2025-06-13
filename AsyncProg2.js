let a = 10;
let b = 20;

// Abhi ye hm ek promise bnarhe joki andr wala kam pura hone ke bad,
//  resolve ke andar jo bhi likha vo return krega
let waitingData = new Promise((resolve,reject)=>{
setTimeout(()=>{
    b=30;
    resolve(b)
},2000)
})

console.log("hii");
// ye tbhi call hoga jb vo promise puri trh run ho chuka hoga
// ,uske bad jo return kr rhe vo data me aajayega
waitingData.then((data)=>{
    console.log(a+data);
})
console.log("hii");

/*
Output:-
hii
hii
40
*/