import { Product } from './model/product.js';
import { productSchema } from './model/product.js';
import {Customer} from './model/customer.js';
import { customerSchema } from './model/customer.js';
import mongoose from 'mongoose';
import express from "express";
const PORT = 3000;

const url = 'mongodb://127.0.0.1:27017/shop';
//const url = 'mongodb://localhost:27017/shop';
const app = express();
const connection = mongoose.createConnection(url, {maxPoolSize: 50});
//const Product = connection.model('product', productSchema);
//const mongoose = require('mongoose');
//const {MongoClient}

// mongoose.connect('mongodb://127.0.0.1:27017/shop', function (err) {
//   if (err) throw err;
//   console.log('Successfully connected');
// });

// const userSchema =mongoose.Schema ({
//   _id: mongoose.Schema.Types.ObjectId,
//   name: String,
//   product: {
//     type: mongoose.Schema.Types.ObjectId, 
//     	ref: 'Product'
//   },
//   ratings: [
//      {
//       title: String,
//       price: Number
//      }
//   ] 
// });
//const User = mongoose.model('User', userSchema);


app.use(express.static("css"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "pug");

connection.on('open', () => {
    console.log('Connected to the database!');
     app.listen(PORT, ()=> {
        console.log(`Server started on http://localhost:${PORT}`);
    })
  });
  
  connection.on('error', (err) => {
    console.error(`Database connection error: ${err}`);
  });


// mongoose.connect(url)
//     .then(() => {
//         console.log('Connected to DB');
//         app.listen(PORT, () => {
//             console.log(`Server started on http://localhost:${PORT}`);
//         })
//     })
//     .catch((err) => { console.log(`DB connection error: ${err}`) });

app.get('/', async (req, res) => {
  await Product.find()
        .then(products => {
            const productsHtml =  products.map(product => `
        <div style="border: 1px solid #000; 
        width: fit-content; 
        margin: 0 0 20px 0; 
        padding: 0 10px">
          <h2>${product.title}</h2>
          <div>Price: ${product.price}</div>
        </div>
                `);
            const html = `<h1>Users purchases:</h1> ${productsHtml.join('')}`;
            res.send(html);
        })
        await Customer.find()
        .then(customers => {
            const customersHtml =  customers.map(customer => `
        <div style="border: 1px solid #000; 
        width: fit-content; 
        margin: 0 0 20px 0; 
        padding: 0 10px">
          <h2>${customer.name}</h2>
          <div>id product: ${customer.product_id}</div>
        </div>
                `);
            const html = `${customersHtml.join('')}`;
            res.send(html);
        })
        .catch(error => {
            console.error(error);
        });
});
