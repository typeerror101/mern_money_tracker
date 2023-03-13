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
    await mongoose.connect('mongodb+srv://typeerror101:AFVkIRhFShUNnmOP@cluster0.kvzzm05.mongodb.net/?retryWrites=true&w=majority');
    const {name, description, datetime, price} = req.body;
    const transaction = Transaction.create({name, description, datetime, price});

    res.json(transaction);
})

app.listen(port);
