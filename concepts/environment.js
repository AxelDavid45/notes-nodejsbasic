const name = process.env.YOURNAME || 'no name';
const lastname =  process.env.LASTNAME || 'no lastname';

console.log(`Hi ${name}`);
console.log(`Your lastname: ${lastname}`);