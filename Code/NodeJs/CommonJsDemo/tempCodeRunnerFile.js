const fs = require('fs/promises')


async function readSampleFile() {
    const data = await fs.readFile('./sample.txt', 'utf-8');
    console.log(data);
}


readSampleFile();