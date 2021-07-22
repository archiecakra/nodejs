const fs = require('fs');

const writeStream = fs.createWriteStream('output.txt');

writeStream.write('coba nulis kata kata cokkk1!\n');
writeStream.write('coba nulis kata kata cokkk2!\n');
writeStream.write('coba nulis kata kata cokkk3!\n');
writeStream.write('coba nulis kata kata cokkk4!\n');
writeStream.end('Terimakasih njing');