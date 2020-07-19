const os = require('os');

console.log(os.arch());
//console.log(os.constants);
//console.log(os.cpus());
console.log(os.homedir());

//Conversions
const SIZE = 1024;
const kb = byte => byte / SIZE;
const mb = byte => kb(byte) / SIZE;
const gb = byte => mb(byte) / SIZE;

console.log(os.freemem());
console.log(gb(os.freemem()));