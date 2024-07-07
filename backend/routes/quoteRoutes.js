const express = require('express');
const router = express.Router();
const Quote = require('../models/quotess');

// Get all quotes
router.get('/', async (req, res) => {
    try {
        const quotes = await Quote.find();
        res.json(quotes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// we will get a random quote
router.get('/random', async (req, res) => {
    try {
        const count = await Quote.countDocuments();
        const random = Math.floor(Math.random() * count);
        const quote = await Quote.findOne().skip(random);
        res.json(quote);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// quotes by auther
router.get('/author/:name', async (req, res) => {
    try {
        const quotes = await Quote.find({ author: req.params.name });
        res.json(quotes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new quote
router.post('/', async (req, res) => {
    const quote = new Quote({
        text: req.body.text,
        author: req.body.author,
    });

    try {
        const newQuote = await quote.save();
        res.status(201).json(newQuote);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
