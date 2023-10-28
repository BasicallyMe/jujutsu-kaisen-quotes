const express = require('express');
const app = express();
const quotesCollection = require('./middlewares/getQuotes');

const PORT = process.env.PORT || 5678;

app.all("*", function (req, res, next) {
  res.set("Access-Control-Allow-Origin", "*");
  next();
});

app.get('/api/quote', (req, res) => {
    res.send(quotesCollection.getRandom());
})

app.get('/api/all', (req, res) => {
    res.send(quotesCollection.getAll());
})

app.listen(PORT, () => console.log(`Server listening on localhost:${PORT}`))