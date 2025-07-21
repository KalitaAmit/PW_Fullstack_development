// console.log(module);
// console.log(require);


// const searchingLib = require('./searching.js');
// console.log(searchingLib);


const fs = require('fs/promises')


async function readSampleFile() {
    const data = await fs.readFile('./sample.txt', 'utf-8');
    console.log(data);
}

async function writeSampleFile() {
    const data = await fs.writeFile('./sample.txt', 'hello world')  //  overwrite the earlier text of the file with given text(hello world)
}

async function appendSampleFile() {
    const data = await fs.appendFile('./sample.txt', 'hello world')  //  This line adds the text "hello world" to the end of the file sample.txt.
}

//  readSampleFile();
//  writeSampleFile();
appendSampleFile();