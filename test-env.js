const dotenv = require('dotenv');
dotenv.config();

console.log('✅ USERNAME is:', `"${process.env.USERNAME}"`);
console.log('✅ PASSWORD is:', `"${process.env.PASSWORD}"`);
