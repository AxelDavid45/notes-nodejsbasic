console.log("Fisrt line");
let i = 0;

//This line execute itself asynchronously
setInterval(()=> {
    console.log(i);
    i++;
}, 1000);

console.log("Second line");