//On beforeexit
process.on('beforeExit', () => {
   console.log('I\'m about to close the program');
});

console.log('I almost close the program');
process.on('exit', () => {
    console.log('I closed the program, we\'re out of the event loop');
});


process.on('uncaughtException', (err, origin) => {
    console.error('error');
    // console.error(origin);
})

console.log(a+b);//Force error
console.log('this will work');