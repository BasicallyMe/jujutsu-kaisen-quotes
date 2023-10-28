'use strict';

const quotes = require('../quotes');

module.exports = {
    getRandom: function getRandom() {
        let index = Math.floor(Math.random() * quotes.length);
        let availableQuotes = quotes.slice();
        return availableQuotes[index];
    },
    getAll: function getAll() {
        let availableQuotes = quotes.slice();
        return availableQuotes;
    }
}