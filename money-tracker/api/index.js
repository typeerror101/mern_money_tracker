const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = '4000';
const Transaction = require('./models/Transaction');
const { default: mongoose } = require('mongoose');

app.use(cors());
app.use(express.json());

app.get('/api/test', (req,res) => {
    res.json('test ok5');
});

app.post('/api/transaction', (req,res) => {
   console.log(process.env.MONGO_URL);
    // mongoose.connect('process.env.MONGO_URL');
    const {name,description,datetime} = req.body;
    res.json(req.body);
})

app.listen(port);
