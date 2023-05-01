import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';
import { createRequire } from 'node:module';
import fs, { promises } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);

const PORT = 3000;

const app = express();

const filePath = path.join(__dirname, './package.json')

async function getData() {
    const fileData = await promises.readFile(filePath)
    console.log(fileData.toString());
}

async function getDatawrite() {
    const fileData = await promises.writeFile(filePath)
    console.log(fileData.toString());
}

console.log('start');
getData();
getDatawrite();
console.log('end');


// console.log('start');
// const filePath = path.join(__dirname, './package.json')
// console.log((await promises.readFile(filePath)).toString());
// console.log('end');


// console.log('start');
// function readFilePromise(filePath) {
//     return new Promise((resolve, reject) => {
//         try {
//             const data = fs.readFileSync(filePath);
//             resolve(data.toString())
//         } catch (error) {
//             reject(error)
//         }
//     })
// }

// readFilePromise(path.join(__dirname, './package.json'))
//     .then(data => { console.log(data) })
//     .catch(err => { console.error(err) });
// console.log('end');


app.get('/', (req, res) => {
    res.send('<h1>Wellcome</h1>');
})


app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
})