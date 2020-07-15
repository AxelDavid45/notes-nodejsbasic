const { exec, spawn } = require('child_process');

// exec('ls -al ~/', (err, stdout, stderr) => {
//     if (err) {
//         console.error(err.message);
//         console.error(stderr);
//     } else {
//         console.log(stdout);
//     }
// });

let python = spawn('python3', ['-V']);
python.stdout.on('data', (data) => {
    console.log(data.toString());
});