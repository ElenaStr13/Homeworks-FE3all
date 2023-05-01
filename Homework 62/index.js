import fs from "fs";
import os from "os";
import path from "path";
import {fileURLToPath} from "url";

const users = [
    {name: 'Mike', age: 25},
    {name: 'Bob', age: 32},
    {name: 'Nikola', age: 17},
];

const userData = {users: users};

console.log("System:"+ os.platform());
console.log("Home directory:"+ os.homedir());
const filePath = path.join(os.homedir(), "data.json");

const newData = [
    {name: "Anna", age: 24},
    {name: "Tom", age: 52}
];

fs.writeFile(filePath, JSON.stringify(newData), (err) => {
    if(err) (console.log(err));
    console.log("Data written to file");
    //console.log(filePath);
});

function isExist() {
    const existPromise = new Promise((resolve, reject) => {
        if (filePath) {
            resolve("File exists")
        } else {
            reject(new Error("File not exists"))
        }
    })
}

isExist();