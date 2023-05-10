import express from 'express';
import mongoose from 'mongoose';


const PORT = 3000;
const url = 'mongodb://localhost:27017/shop';
const app = express();

app.get('/', (req, res)=>{
    res.send('<h1>Wellcome</h1>');
})

app.listen(PORT, ()=> {
    console.log(`Server started on http://localhost:${PORT}`);
})