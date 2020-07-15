const fs = require('fs');

const read = (path, callback) => {
    fs.readFile(path, callback);
}

const write = (path, data, callback) => {
    fs.writeFile(path, data, callback);
}

const deleteFile = (path, callback) => {
    fs.unlink(path, callback);
}

//asynchronous
console.log('Start');

//Read file
read(`${__dirname}/readme.txt`, (err, data) => {
    err === null || err === undefined ? console.log(data.toString()) : console.error(err.message);
});

//create file
let content = `${__filename} has created this file`;
write(`${__dirname}/tmpFile.txt`, content, (err, data) => {
    err != null || err != undefined ? console.error(err.message) : console.log('Write successful');
});

//delete file
deleteFile(`${__dirname}/tmpFile.txt`, (err) => {
    err != null || err != undefined ? console.error(err.message) : console.log('File deleted');
});


console.log('Continue');