const fs = require('fs');

const data = fs.readFileSync('./notes.txt', 'utf-8');

const dataStream = fs.createReadStream('./notes.txt', {
  highWaterMark: 1,
});
dataStream.on('readable', () => {
  try {
    process.stdout.write(`[${dataStream.read()}]`);
  } catch (error) {
    console.log('Error Cok');
  }
});
dataStream.on('end', () => {
  console.log('Done');
});

// console.log(data);