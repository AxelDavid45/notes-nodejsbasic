const stream = require('stream');

let readable = new stream.Readable();
readable._read = () => {
    console.log(readable.read().toString());
}
readable.push('Axel Espinosa');


