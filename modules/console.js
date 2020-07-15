//Start stopwatch
console.time('performance time');
//Console basics
console.log('x');
console.info('aaa');
console.error('This is an error');
console.warn('This works as a warning');

//Table
const myObject = [
    {
        a: 1,
        b: 'x'
    },
    {
        a: 3,
        b: 'q'
    }
];
console.table(myObject);
//End stopwatch
console.timeEnd('performance time');