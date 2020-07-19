//Example using http and streams
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.time('Benchmark');
    console.log('New request')
    let streamResponse = fs.createReadStream(`${__dirname}/data.txt`);
    streamResponse.setEncoding('UTF8');
    streamResponse.pipe(res);
    console.timeEnd('Benchmark');
});

server.listen(3000, () => {
    console.log('Listen in port 3000');
});