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

app.post('/api/transaction', async (req,res) => {
    await mongoose.connect(process.env.MONGO_URL);
    const {
        name,
        description, 
        datetime, 
        price,
    } = req.body;

    const transaction = Transaction.create({name, description, datetime, price});

    res.json(transaction);
})

app.get('/api/transactions', async (req, res) => {
    await mongoose.connect(process.env.MONGO_URL);
    const transactions = await Transaction.find();

    res.json(transactions)
})

app.listen(port);
