//Example using http
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.time('Benchmark');
    console.log('New request')
    fs.readFile(`${__dirname}/data.txt`, (err, data) => {
        res.end(data);
    });
    console.timeEnd('Benchmark');
});

server.listen(3000, () => {
    console.log('Listen in port 3000');
});