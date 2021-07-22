const fs = require('fs');

const readStream = fs.createReadStream('./input.txt', {
  highWaterMark: 15
});

const writeStream = fs.createWriteStream('./output.txt');

readStream.on('readable', () => {
  try {
    // console.log(`${readStream.read()}`);
    writeStream.write(`${readStream.read()}\n`);
  } catch (error) {
    console.log('Error Cok');
  }
});

readStream.on('end', () => {
  console.log('Done Cok');
  writeStream.end();
});